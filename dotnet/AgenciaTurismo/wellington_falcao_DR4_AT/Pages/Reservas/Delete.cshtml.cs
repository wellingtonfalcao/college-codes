using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Reservas
{
    public class DeleteModel : PageModel
    {
        private readonly wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext _context;

        public DeleteModel(wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Reserva Reserva { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reserva = await _context.Reservas.FirstOrDefaultAsync(m => m.Id == id);

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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reserva = await _context.Reservas.FindAsync(id);
            if (reserva != null)
            {
                Reserva = reserva;
                _context.Reservas.Remove(Reserva);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
