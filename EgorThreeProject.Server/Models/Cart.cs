namespace EgorThreeProject.Server.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int UserId { get; set; } // Связь с пользователем
        public List<CartItem> CartItems { get; set; } // Список товаров в корзине
    }
}
