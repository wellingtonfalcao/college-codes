using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Enderecos
{
    public class CreateModel : PageModel
    {
        private readonly Infnet.Data.InfnetDbContext _context;

        public CreateModel(Infnet.Data.InfnetDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
        ViewData["AlunoId"] = new SelectList(_context.Alunos, "Id", "Nome");
            return Page();
        }

        [BindProperty]
        public Endereco Endereco { get; set; } = default!;

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }
            _context.Enderecos.Add(Endereco);
            await _context.SaveChangesAsync();
            return RedirectToPage("./Index");
        }
    }
}
