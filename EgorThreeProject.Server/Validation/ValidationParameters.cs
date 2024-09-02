using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace EgorThreeProject.Server.Validation
{
    public static class ValidationParameters
    {
        public static TokenValidationParameters GetValidationParameters(IConfiguration configuration)
        {
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = configuration["Jwt:Issuer"],
                ValidateAudience = true,
                ValidAudience = configuration["Jwt:Audience"],
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"])),
                ValidateIssuerSigningKey = true,

                //LifetimeValidator = (notBefore, expires, token, parameters) =>
                //{
                //    if (expires == null) return false;
                //    var currentUnixTime = new DateTimeOffset(DateTime.UtcNow).ToUnixTimeSeconds();
                //    return expires > DateTime.UtcNow && notBefore < DateTime.UtcNow;
                //}
            };

            return validationParameters;
        }
    }
}
