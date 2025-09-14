using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Data;
using Infnet.Models;

namespace Infnet.Pages.Alunos
{
    public class DetailsModel : PageModel
    {
        private readonly Infnet.Data.InfnetDbContext _context;

        public DetailsModel(Infnet.Data.InfnetDbContext context)
        {
            _context = context;
        }

        public Aluno Aluno { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var aluno = await _context.Alunos.FirstOrDefaultAsync(m => m.Id == id);
            if (aluno == null)
            {
                return NotFound();
            }
            else
            {
                Aluno = aluno;
            }
            return Page();
        }
    }
}
