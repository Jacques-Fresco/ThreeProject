namespace EgorThreeProject.Server.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; } // Связь с товаром
        public int Quantity { get; set; } // Количество данного товара
    }
}
