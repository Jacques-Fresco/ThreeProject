namespace EgorThreeProject.Server.Models
{
    public class Wishlist
    {
        public int Id { get; set; }
        public int UserId { get; set; } // Связь с пользователем
        public List<WishlistItem> WishlistItems { get; set; } // Список избранных товаров
    }

}
