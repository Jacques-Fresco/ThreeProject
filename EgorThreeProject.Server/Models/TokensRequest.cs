using System.ComponentModel.DataAnnotations;

namespace EgorThreeProject.Server.Models
{
    public class TokensRequest
    {
        [Required]
        public string AccessToken { get; set; }

        [Required]
        public string RefreshToken { get; set; }
    }
}
