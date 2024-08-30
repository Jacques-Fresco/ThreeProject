using EgorThreeProject.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using EgorThreeProject.Server.Data;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WweebbAapppp.Services;
using EgorThreeProject.Services;
using EgorThreeProject.Server.Middleware;
using EgorThreeProject.Server.Validation;
using EgorThreeProject.Server.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Настройка логирования
builder.Logging.ClearProviders().AddConsole();

// Добавление контекста базы данных
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")))
    .AddCustomIdentity(builder.Configuration); // Настройка Identity

// Регистрация сервисов JWT и Refresh Token
builder.Services.AddScoped<JwtService>().AddScoped<RefreshTokenService>();

// Настройка аутентификации
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = ValidationParameters.GetValidationParameters(builder.Configuration);
    
        options.Events = new JwtBearerEvents
        {
            OnAuthenticationFailed = context =>
            {
                // Логируем ошибку аутентификации
                Console.WriteLine("Authentication failed: " + context.Exception.Message);
                Console.WriteLine("Token: " + context.Request.Headers["Authorization"]);
                return Task.CompletedTask;
            },
            OnTokenValidated = context =>
            {
                // Логируем успешную аутентификацию
                Console.WriteLine("Token validated successfully.");
                return Task.CompletedTask;
            }
        };
    });

builder.Services.AddControllers();

// Настройка CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
               //.AllowCredentials();
    });
});

// Создание приложения
var app = builder.Build();

// Настройка логирования на этапе инициализации приложения
var logger = app.Services.GetRequiredService<ILogger<Program>>();
logger.LogInformation("Starting application...");

app.UseCors("AllowAllOrigins");
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseRouting();
app.UseMiddleware<RawRequestLoggingMiddleware>();
app.UseAuthentication();
app.UseAuthorization();

// Настройка маршрутов
app.MapControllers();
app.MapFallbackToFile("/index.html");

try
{
    app.Run();
    logger.LogInformation("Application started successfully.");
}
catch (Exception ex)
{
    logger.LogError(ex, "An error occurred during application startup.");
    throw;
}
