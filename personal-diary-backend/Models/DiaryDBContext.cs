using Microsoft.EntityFrameworkCore;

namespace personal_diary_backend.Models
{
    public class DiaryDBContext : DbContext
    {
        public DiaryDBContext(DbContextOptions<DiaryDBContext> options) : base(options)
        {
        }

        public DbSet<Diary> Diary { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=SWAGATPC;Initial Catalog=PersonalDiary;Integrated Security=True;Encrypt=False");
        }
    }
}
