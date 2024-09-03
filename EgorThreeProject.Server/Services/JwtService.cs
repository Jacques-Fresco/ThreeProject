using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EgorThreeProject.Server.Models;
using EgorThreeProject.Services;
using System.Globalization;
using Newtonsoft.Json.Linq;

namespace WweebbAapppp.Services
{
    public class JwtService
    {
        public const int EXPIRATION_MINUTES = 100;
        public const int EXPIRATION_MINUTES_REFRESH_TOKEN = 1120;

        private readonly IConfiguration _configuration;
        private readonly RefreshTokenService _refreshTokenService;

        public JwtService(IConfiguration configuration, RefreshTokenService refreshTokenService)
        {
            _configuration = configuration;
            _refreshTokenService = refreshTokenService;
        }

        public AuthenticationResponse CreateToken(IdentityUser user)
        {
            var expiration = DateTime.UtcNow.AddMinutes(EXPIRATION_MINUTES);
            var expiration_refreshToken = DateTime.UtcNow.AddMinutes(EXPIRATION_MINUTES_REFRESH_TOKEN);

            var token = CreateJwtToken(
                CreateClaims(user),
                CreateSigningCredentials(),
                expiration
            );

            var refreshToken = _refreshTokenService.GenerateRefreshToken();

            _refreshTokenService.SaveRefreshToken(user.Id, refreshToken, expiration_refreshToken);

            var tokenHandler = new JwtSecurityTokenHandler();

            return new AuthenticationResponse
            {
                AccessToken = tokenHandler.WriteToken(token),
                expirationAccessToken = expiration,
                RefreshToken = refreshToken,
                expirationRefreshToken = expiration_refreshToken
            };
        }

        public async Task<AuthenticationResponse> GenerateNewTokens(IdentityUser user)
        {
            var newAccessToken = CreateToken(user);
            var newRefreshToken = _refreshTokenService.GenerateRefreshToken();

            var expirationRefreshToken = DateTime.UtcNow.AddMinutes(JwtService.EXPIRATION_MINUTES_REFRESH_TOKEN);
            _refreshTokenService.SaveRefreshToken(user.Id, newRefreshToken, expirationRefreshToken);

            return new AuthenticationResponse
            {
                AccessToken = newAccessToken.AccessToken,
                expirationAccessToken = newAccessToken.expirationAccessToken,
                RefreshToken = newRefreshToken,
                expirationRefreshToken = expirationRefreshToken
            };
        }

        private JwtSecurityToken CreateJwtToken(Claim[] claims, SigningCredentials credentials, DateTime expiration) =>
            new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: expiration,
                signingCredentials: credentials
            );

        

        private Claim[] CreateClaims(IdentityUser user) {
            return new[] {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                //new Claim(JwtRegisteredClaimNames.Iat, EpochTime.GetIntDate(DateTime.UtcNow).ToString(CultureInfo.InvariantCulture), ClaimValueTypes.Integer64),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString()),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email)
            };
        }

        private SigningCredentials CreateSigningCredentials() =>
            new SigningCredentials(
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])
                ),
                SecurityAlgorithms.HmacSha256
            );

        public string ExtractUserIdFromToken(string accessToken)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtToken = tokenHandler.ReadJwtToken(accessToken);
            var payload = jwtToken.Payload.SerializeToJson();
            JObject payloadJson = JObject.Parse(payload);
            return (string)payloadJson[ClaimTypes.NameIdentifier];
        }
    }
}
