using EgorThreeProject.Server.Extensions;
using EgorThreeProject.Server.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.ConfigureLogging();

builder.Services.ConfigureDatabase(builder.Configuration);
builder.Services.ConfigureIdentity(builder.Configuration);
builder.Services.ConfigureJwtAuthentication(builder.Configuration);

//SwaggerHelper.ConfigureService(builder.Services);

builder.Services.ConfigureCors();
builder.Services.ConfigureControllers();

var app = builder.Build();

app.ConfigureApp();

var logger = app.Services.GetRequiredService<ILogger<Program>>();

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