using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Infnet.Models;
using Infnet.Data;

namespace Infnet.Pages.Emails {
    public class CreateModel : PageModel {
        private readonly InfnetDbContext _context;

        public CreateModel(InfnetDbContext context) {
            _context = context;
        }

        [BindProperty]
        public Email Email { get; set; } = default!;

        public IActionResult OnGet() {
            ViewData["AlunoId"] = new SelectList(_context.Alunos, "Id", "Nome");
            return Page();
        }

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync() {
            if (!ModelState.IsValid) {
                ViewData["AlunoId"] = new SelectList(_context.Alunos, "Id", "Nome");
                return Page();
            }
            _context.Emails.Add(Email);
            await _context.SaveChangesAsync();
            return RedirectToPage("/Emails/Index", new { id = Email.AlunoId});
        }
    }
}
