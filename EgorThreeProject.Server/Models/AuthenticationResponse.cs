namespace EgorThreeProject.Server.Models
{
    public class AuthenticationResponse
    {
        public string AccessToken { get; set; } 
        public DateTime expirationAccessToken { get; set; } 
        public string RefreshToken { get; set; } 
        public DateTime expirationRefreshToken { get; set; } 
    }


}
