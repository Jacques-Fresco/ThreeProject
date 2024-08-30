using EgorThreeProject.Server.Data;
using EgorThreeProject.Server.Models;
using Microsoft.AspNetCore.Identity;

namespace EgorThreeProject.Server.Configuration
{
    public static class IdentityConfiguration
    {
        public static void AddCustomIdentity(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddIdentity<User, IdentityRole>(options =>
            {
                options.User.RequireUniqueEmail = configuration.GetValue<bool>("IdentitySettings:RequireUniqueEmail");
                options.Password.RequireDigit = configuration.GetValue<bool>("IdentitySettings:Password:RequireDigit");
                options.Password.RequireLowercase = configuration.GetValue<bool>("IdentitySettings:Password:RequireLowercase");
                options.Password.RequireUppercase = configuration.GetValue<bool>("IdentitySettings:Password:RequireUppercase");
                options.Password.RequireNonAlphanumeric = configuration.GetValue<bool>("IdentitySettings:Password:RequireNonAlphanumeric");
                options.Password.RequiredLength = configuration.GetValue<int>("IdentitySettings:Password:RequiredLength");
                options.Password.RequiredUniqueChars = configuration.GetValue<int>("IdentitySettings:Password:RequiredUniqueChars");
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();
        }
    }
}
