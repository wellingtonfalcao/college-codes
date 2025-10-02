using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.PacotesTuristicos
{
    public class CreateModel : PageModel
    {
        private readonly AgenciaViagemDbContext _context;

        public CreateModel(AgenciaViagemDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public PacoteTuristico PacoteTuristico { get; set; }

        public List<Destino> DestinosDisponiveis { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            DestinosDisponiveis = await _context.Destinos.ToListAsync();
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int[] selectedDestinos)
        {
            if (!ModelState.IsValid)
            {
                DestinosDisponiveis = await _context.Destinos.ToListAsync();
                return Page();
            }

            if (selectedDestinos != null && selectedDestinos.Length > 0)
            {
                PacoteTuristico.Destinos = await _context.Destinos
                    .Where(d => selectedDestinos.Contains(d.Id))
                    .ToListAsync();
            }

            _context.PacotesTuristicos.Add(PacoteTuristico);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
