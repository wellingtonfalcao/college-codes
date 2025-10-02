using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace AgenciaTurismo.Pages.Reservas
{
    public class SimulateReservationModel : PageModel
    {
        private readonly AgenciaViagemDbContext _context;

        public SimulateReservationModel(AgenciaViagemDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public int QuantidadeParticipantes { get; set; } = 1;

        [BindProperty]
        public int PacoteTuristicoId { get; set; }

        public decimal ValorTotal { get; set; }

        public List<PacoteTuristico> Pacotes { get; set; } = new List<PacoteTuristico>();

        public async Task OnGetAsync()
        {
            Pacotes = await _context.PacotesTuristicos.ToListAsync();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                Pacotes = await _context.PacotesTuristicos.ToListAsync();
                return Page();
            }

            var pacote = await _context.PacotesTuristicos
                .FirstOrDefaultAsync(p => p.Id == PacoteTuristicoId);

            if (pacote != null)
            {
                ValorTotal = QuantidadeParticipantes * pacote.Preco;
            }

            Pacotes = await _context.PacotesTuristicos.ToListAsync();
            return Page();
        }
    }
}