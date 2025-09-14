using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Enderecos
{
    public class DeleteModel : PageModel
    {
        private readonly Infnet.Data.InfnetDbContext _context;

        public DeleteModel(Infnet.Data.InfnetDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Endereco Endereco { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var endereco = await _context.Enderecos.FirstOrDefaultAsync(m => m.Id == id);

            if (endereco == null)
            {
                return NotFound();
            }
            else
            {
                Endereco = endereco;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var endereco = await _context.Enderecos.FindAsync(id);
            if (endereco != null)
            {
                Endereco = endereco;
                _context.Enderecos.Remove(Endereco);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
