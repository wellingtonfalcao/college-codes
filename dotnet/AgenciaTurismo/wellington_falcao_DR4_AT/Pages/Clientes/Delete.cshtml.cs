using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Clientes
{
    public class DeleteModel : PageModel
    {
        private readonly wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext _context;

        public DeleteModel(wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Cliente Cliente { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cliente = await _context.Clientes.FirstOrDefaultAsync(m => m.Id == id);

            if (cliente == null)
            {
                return NotFound();
            }
            else
            {
                Cliente = cliente;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cliente = await _context.Clientes.FindAsync(id);
            if (cliente != null)
            {
                Cliente = cliente;
                _context.Clientes.Remove(Cliente);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
