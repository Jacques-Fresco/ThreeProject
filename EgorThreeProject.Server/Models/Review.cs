namespace EgorThreeProject.Server.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int ProductId { get; set; } // Связь с товаром
        public int UserId { get; set; } // Связь с пользователем
        public int Rating { get; set; } // Рейтинг от 1 до 5
        public string Comment { get; set; } // Текст отзыва
    }

}
