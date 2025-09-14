using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Models;
using Infnet.Data;
using Microsoft.AspNetCore.Mvc;

namespace Infnet.Pages.Emails {
    public class IndexModel : PageModel {
        private readonly InfnetDbContext _context;

        public IndexModel(InfnetDbContext context) {
            _context = context;
        }

        public IList<Email> Emails { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id) {

            if (id == null) {
                return NotFound();
            }
            Emails = await _context.Emails
                .Include(e => e.Aluno)
                .Where(a => a.Aluno.Id == id)
                .ToListAsync();
            if (Emails == null) {
                return NotFound();
            }
            return Page();
        }
    }
}
