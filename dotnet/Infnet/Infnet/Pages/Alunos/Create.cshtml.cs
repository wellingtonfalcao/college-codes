using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Alunos {
    public class CreateModel : PageModel {
        private readonly InfnetDbContext _context;

        public CreateModel(InfnetDbContext context) {
            _context = context;
        }

        public IActionResult OnGet() {
            return Page();
        }

        [BindProperty]
        public Aluno Aluno { get; set; } = default!;

        public async Task<IActionResult> OnPostAsync() {
            
            if (!ModelState.IsValid) {
                return Page();
            }
            _context.Alunos.Add(Aluno);
            await _context.SaveChangesAsync();
            return RedirectToPage("./Index");
        }
    }
}
