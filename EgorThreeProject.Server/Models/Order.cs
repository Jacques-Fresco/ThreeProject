namespace EgorThreeProject.Server.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; } // Связь с пользователем
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public string Status { get; set; } // Например, "В обработке", "Отправлен", "Доставлен"
        public List<OrderItem> OrderItems { get; set; } // Список товаров в заказе
    }
}
