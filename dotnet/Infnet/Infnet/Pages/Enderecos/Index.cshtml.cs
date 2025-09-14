using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Enderecos {
    public class IndexModel : PageModel {
        private readonly InfnetDbContext _context;

        public IndexModel(InfnetDbContext context) {
            _context = context;
        }

        public IList<Endereco> Endereco { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id) {
            if (id == null) {
                return NotFound();
            }
            Endereco = await _context.Enderecos.Include(a => a.Aluno)
                .Where(a => a.Aluno.Id == id).ToListAsync();
            if (Endereco == null) {
                return NotFound();
            }
            return Page();
        }
    }
}
