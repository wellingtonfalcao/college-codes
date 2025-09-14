using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Data;
using Infnet.Models;
using Infnet.Interfaces;

namespace Infnet.Pages.Alunos {
    public class IndexModel : PageModel {
        /*
        private readonly InfnetDbContext _context;

        public IndexModel(InfnetDbContext context) {
            _context = context;
        }
        */

        private readonly IAlunoService _alunoService;

        public IndexModel(IAlunoService alunoService) {
            _alunoService = alunoService;
        }

        [BindProperty(SupportsGet = true)]
        public string BuscaNome { get; set; }

        public IList<Aluno> Alunos { get; set; } = default!;

        public async Task OnGetAsync() {
            //Aluno = await _alunoService.GetAllAsynch();
            if (string.IsNullOrWhiteSpace(BuscaNome)) {
                Alunos = await _alunoService.GetAllAsynch();
            }
            else {
                Alunos = await _alunoService.GetAlunosPorNomeAsynch(BuscaNome);
            }
        }
    }
}
