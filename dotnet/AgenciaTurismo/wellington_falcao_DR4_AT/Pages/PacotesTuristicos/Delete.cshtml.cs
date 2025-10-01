using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.PacotesTuristicos
{
    public class DeleteModel : PageModel
    {
        private readonly wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext _context;

        public DeleteModel(wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public PacoteTuristico PacoteTuristico { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pacoteturistico = await _context.PacoteTuristicos.FirstOrDefaultAsync(m => m.Id == id);

            if (pacoteturistico == null)
            {
                return NotFound();
            }
            else
            {
                PacoteTuristico = pacoteturistico;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pacoteturistico = await _context.PacoteTuristicos.FindAsync(id);
            if (pacoteturistico != null)
            {
                PacoteTuristico = pacoteturistico;
                _context.PacoteTuristicos.Remove(PacoteTuristico);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
