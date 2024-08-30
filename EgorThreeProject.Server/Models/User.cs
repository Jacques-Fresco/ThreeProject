using Microsoft.AspNetCore.Identity;

namespace EgorThreeProject.Server.Models
{
    public class User : IdentityUser
    {
        public string? Address { get; set; }
    }

}
