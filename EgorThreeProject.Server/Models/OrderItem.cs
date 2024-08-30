namespace EgorThreeProject.Server.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; } // Связь с товаром
        public int Quantity { get; set; } // Количество данного товара
    }

}
