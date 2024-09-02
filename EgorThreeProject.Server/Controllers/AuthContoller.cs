using EgorThreeProject.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using WweebbAapppp.Services;

namespace EgorThreeProject.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly JwtService _jwtService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(UserManager<User> userManager, SignInManager<User> signInManager, JwtService jwtService, ILogger<AuthController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtService = jwtService;
            _logger = logger;
        }

        private IActionResult ValidateModel(object model, string[] requiredFields)
        {
            if (model == null)
                return BadRequest("Недостаточно данных.");

            foreach (var field in requiredFields)
            {
                var property = model.GetType().GetProperty(field)?.GetValue(model)?.ToString();
                if (string.IsNullOrEmpty(property))
                    return BadRequest($"{field} обязателен.");
            }

            return ModelState.IsValid ? null : BadRequest(ModelState);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var validationError = ValidateModel(model, new[] { "Email", "Password" });
            if (validationError != null)
                return validationError;

            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: false, lockoutOnFailure: false);
            if (!result.Succeeded)
                return Unauthorized("Неверный логин или пароль.");

            var user = await _userManager.FindByEmailAsync(model.Email.ToLower());
            if (user == null)
                return Unauthorized("Пользователь не найден.");

            var tokenResponse = _jwtService.CreateToken(user);
            return Ok(new
            {
                Message = "Успешный вход",
                Token = tokenResponse.AccessToken,
                RefreshToken = tokenResponse.RefreshToken ?? "",
                Expiration = tokenResponse.expirationAccessToken
            });
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] RegisterModel model)
        {
            var validationError = ValidateModel(model, new[] { "Username", "Email", "Password" });
            if (validationError != null)
                return validationError;

            if (await _userManager.FindByEmailAsync(model.Email) != null)
                return Conflict("Пользователь с таким email уже существует.");

            var newUser = new User { UserName = model.Username, Email = model.Email };
            var result = await _userManager.CreateAsync(newUser, model.Password);
            if (!result.Succeeded)
                return BadRequest(new { Errors = string.Join(", ", result.Errors.Select(e => e.Description)) });

            var tokenResponse = _jwtService.CreateToken(newUser);
            return Ok(new
            {
                Message = "Успешная регистрация",
                UserId = newUser.Id,
                AccessToken = tokenResponse.AccessToken ?? "",
                ExpirationAccessToken = tokenResponse.expirationAccessToken,
                RefreshToken = tokenResponse.RefreshToken ?? "",
                ExpirationRefreshToken = tokenResponse.expirationRefreshToken
            });
        }

        [Authorize]
        [HttpGet("profile")]
        public async Task<IActionResult> Profile()
        {
            _logger.LogInformation("Вызван метод Profile");

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
            {
                _logger.LogWarning("Не удалось найти идентификатор пользователя в токене.");
                return Unauthorized();
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
                Email = user.Email ?? ""
            });
        }
    }
}
