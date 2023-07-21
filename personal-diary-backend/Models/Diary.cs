namespace personal_diary_backend.Models
{
    public class Diary
    {
        public int ID { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
