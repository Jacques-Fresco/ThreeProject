using EgorThreeProject.Server.Configuration;
using EgorThreeProject.Server.Data;
using EgorThreeProject.Server.Middleware;
using EgorThreeProject.Server.Validation;
using EgorThreeProject.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using WweebbAapppp.Services;

namespace EgorThreeProject.Server.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureLogging(this WebApplicationBuilder builder)
        {
            builder.Logging.ClearProviders().AddConsole();
            builder.Logging.SetMinimumLevel(LogLevel.Trace);
        }

        public static void ConfigureDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
                       .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()))
                       .EnableSensitiveDataLogging();
            }, ServiceLifetime.Scoped);
        }

        public static void ConfigureDataProtection(this IServiceCollection services)
        {
            services.AddDataProtection();
        }

        public static void ConfigureIdentity(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddCustomIdentity(configuration);
        }

        public static void ConfigureJwtAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<JwtService>();
            services.AddScoped<RefreshTokenService>();

            services.AddAuthentication(optiones =>
            {
                optiones.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                optiones.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                optiones.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = ValidationParameters.GetValidationParameters(configuration);

                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        string token = context.Request.Headers["Authorization"];
                        if (!string.IsNullOrEmpty(token) && token.StartsWith("Bearer "))
                        {
                            token = token.Substring("Bearer ".Length).Trim();
                            Console.WriteLine("OnMessageReceived-Token: " + token);
                        }
                        return Task.CompletedTask;
                    },
                    OnAuthenticationFailed = context =>
                    {
                        var exception = context.Exception;

                        //Логируем основное сообщение об ошибке
                        Console.WriteLine("Authentication failed: " + exception.Message);

                        //Логируем стек вызовов(если доступен)
                        if (!string.IsNullOrEmpty(exception.StackTrace))
                        {
                            Console.WriteLine("Stack Trace: " + exception.StackTrace);
                        }
                        else
                        {
                            Console.WriteLine("Stack Trace: Not available");
                        }

                        //Логируем все внутренние исключения
                        var innerException = exception.InnerException;
                        while (innerException != null)
                        {
                            Console.WriteLine("Inner Exception: " + innerException.Message);
                            Console.WriteLine("Inner Exception Stack Trace: " + innerException.StackTrace);
                            innerException = innerException.InnerException;
                        }

                        //Логируем весь запрос, включая заголовки
                        Console.WriteLine("Request Headers:");
                        foreach (var header in context.Request.Headers)
                        {
                            Console.WriteLine($"{header.Key}: {header.Value}");
                        }

                        //Логируем токен
                        Console.WriteLine("Token: " + context.Request.Headers["Authorization"]);

                        return Task.CompletedTask;
                    },
                    OnTokenValidated = context =>
                    {
                        Console.WriteLine("Token validated successfully.");
                        return Task.CompletedTask;
                    }
                };
            });
        }
        public static void ConfigureSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "Введите токен JWT следующим образом: Bearer {your token}",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] {}
                    }
                });
            });
        }

        public static void ConfigureEndpointsApiExplorer(this IServiceCollection services)
        {
            services.AddEndpointsApiExplorer();
        }

        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });
        }

        public static void ConfigureControllers(this IServiceCollection services)
        {
            services.AddControllers();
        }
    }

    public static class ApplicationExtensions
    {
        public static void ConfigureApp(this WebApplication app)
        {
            var logger = app.Services.GetRequiredService<ILogger<Program>>();
            logger.LogInformation("Starting application...");

            //app.UseSwagger();
            //app.UseSwaggerUI(c =>
            //{
            //    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            //    c.RoutePrefix = string.Empty; 
            //});

            app.UseCors("AllowAllOrigins");
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseRouting();
            //app.UseMiddleware<RawRequestLoggingMiddleware>();
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
            app.MapFallbackToFile("/index.html");
        }
    }
}
