using System.ComponentModel.DataAnnotations;

namespace personal_diary_backend.Models
{
    public class Diary
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
