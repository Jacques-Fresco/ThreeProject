using EgorThreeProject.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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

        public AuthController(UserManager<User> userManager, SignInManager<User> signInManager, JwtService jwtService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Неверные учетные данные.");
            }

            if (model == null)
            {
                return BadRequest("Недостаточно данных для входа.");
            }

            if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
            {
                return BadRequest("Email и пароль обязательны.");
            }

            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                return Unauthorized("Неверный логин или пароль.");
            }

            var user = await _userManager.FindByEmailAsync(model.Email.ToLower());
            if (user == null)
            {
                return Unauthorized("Пользователь не найден.");
            }

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
            if (model == null)
            {
                return BadRequest("Недостаточно данных для регистрации.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (string.IsNullOrEmpty(model.Username) || string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
            {
                return BadRequest("Username, email и пароль обязательны.");
            }

            var existingUser = await _userManager.FindByEmailAsync(model.Email);
            if (existingUser != null)
            {
                return Conflict("Пользователь с таким email уже существует.");
            }

            var newUser = new User
            {
                UserName = model.Username,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(newUser, model.Password);

            if (!result.Succeeded)
            {
                var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                return BadRequest(new { Errors = errors });
            }

            var tokenResponse = _jwtService.CreateToken(newUser);

            return Ok(new
            {
                Message = "Успешная регистрация",
                UserId = newUser.Id,
                AccessToken = tokenResponse.AccessToken ?? "",
                expirationAccessToken = tokenResponse.expirationAccessToken,
                RefreshToken = tokenResponse.RefreshToken ?? "",
                expirationRefreshToken = tokenResponse.expirationRefreshToken
            });
        }

        [Authorize]
        [HttpGet("profile")]
        public async Task<IActionResult> Profile()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound("Пользователь не найден.");
            }

            var profileData = new
            {
                UserId = user.Id,
                Username = user.UserName,
                Email = user.Email ?? ""
            };

            return Ok(profileData);
        }
    }
}
