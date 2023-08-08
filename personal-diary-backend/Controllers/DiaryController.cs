using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using personal_diary_backend.Models;

namespace personal_diary_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiaryController : ControllerBase
    {
        private readonly DiaryDBContext _dbContext;

        public DiaryController(DiaryDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Get all Diaries
        [HttpGet]
        [Route("GetAllJournals")]
        public async Task<IEnumerable<Diary>> GetAllJournals()
        {
            return await _dbContext.Diary.ToListAsync();
        }

        // Insert a journal
        [HttpPost]
        [Route("AddJournal")]
        public async Task<Diary> AddJournal(Diary diaryObj)
        {
            _dbContext.Diary.Add(diaryObj);
            await _dbContext.SaveChangesAsync();
            return diaryObj;
        }

        // Update a journal
        [HttpPost]
        [Route("UpdateJournal/{id}")]
        public async Task<Diary> UpdateStudent(Diary diaryObj)
        {
            _dbContext.Entry(diaryObj).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return diaryObj;
        }

        [HttpDelete]
        [Route("DeleteJournal/{id}")]
        public bool DeleteStudent(int id)
        {
            bool deleted = false;
            var journal = _dbContext.Diary.FirstOrDefault(id);
            if (journal != null)
            {
                _dbContext.Entry(journal).State = EntityState.Modified;
                _dbContext.SaveChanges();
                deleted = true;
            }
            return deleted;
        }
    }
}
