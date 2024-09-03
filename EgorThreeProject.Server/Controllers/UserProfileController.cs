using EgorThreeProject.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WweebbAapppp.Services;

namespace EgorThreeProject.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly ILogger<UserProfileController> _logger;
        private readonly JwtService _jwtService;

        public UserProfileController(UserManager<User> userManager, ILogger<UserProfileController> logger, JwtService jwtService)
        {
            _userManager = userManager;
            _logger = logger;
            _jwtService = jwtService;
        }

        [Authorize]
        [HttpGet("profile")]
        public async Task<IActionResult> GetProfile()
        {
            _logger.LogInformation("Вызван метод Profile");

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrEmpty(userId))
            {
                _logger.LogWarning("Не удалось найти идентификатор пользователя в токене.");
                return Unauthorized("Не удалось получить идентификатор пользователя.");
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                _logger.LogWarning($"Пользователь с ID {userId} не найден.");
                return NotFound("Пользователь не найден.");
            }

            _logger.LogInformation($"Данные профиля для пользователя {user.UserName} успешно получены.");
            return Ok(new
            {
                UserId = user.Id,
                Username = user.UserName,
                Email = user.Email
            });
        }

        [Authorize]
        [HttpPost("update")]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileModel model)
        {
            if (model == null || string.IsNullOrEmpty(model.Username))
            {
                return BadRequest("Недостаточно данных для обновления профиля.");
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                return NotFound("Пользователь не найден.");
            }

            user.UserName = model.Username;

            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded)
            {
                return BadRequest("Ошибка при обновлении профиля: " + string.Join(", ", result.Errors.Select(e => e.Description)));
            }

            var newTokenResponse = _jwtService.CreateToken(user);

            return Ok(new
            {
                Message = "Профиль успешно обновлен.",
                AccessToken = newTokenResponse.AccessToken,
                RefreshToken = newTokenResponse.RefreshToken,
                ExpirationAccessToken = newTokenResponse.expirationAccessToken,
                ExpirationRefreshToken = newTokenResponse.expirationRefreshToken
            });
        }
    }
}
