using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Destinos
{
    public class DetailsModel : PageModel
    {
        private readonly wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext _context;

        public DetailsModel(wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext context)
        {
            _context = context;
        }

        public Destino Destino { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var destino = await _context.Destinos.FirstOrDefaultAsync(m => m.Id == id);
            if (destino == null)
            {
                return NotFound();
            }
            else
            {
                Destino = destino;
            }
            return Page();
        }
    }
}
