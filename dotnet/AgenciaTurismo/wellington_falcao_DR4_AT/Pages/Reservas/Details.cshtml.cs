using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Reservas
{
    public class DetailsModel : PageModel
    {
        private readonly AgenciaViagemDbContext _context;

        public DetailsModel(AgenciaViagemDbContext context)
        {
            _context = context;
        }

        public Reserva Reserva { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            // INCLUIR os dados relacionados com Include()
            var reserva = await _context.Reservas
                .Include(r => r.Cliente)           // Inclui dados do cliente
                .Include(r => r.PacoteTuristico)   // Inclui dados do pacote turístico
                .FirstOrDefaultAsync(m => m.Id == id);

            if (reserva == null)
            {
                return NotFound();
            }
            else
            {
                Reserva = reserva;
            }
            return Page();
        }
    }
}
