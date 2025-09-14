using Infnet.Interfaces;
using Infnet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Infnet.Pages.Alunos
{
    public class InformationModel : PageModel
    {
        private readonly IAlunoService _alunoService;

        public InformationModel(IAlunoService alunoService) {
            _alunoService = alunoService;
        }

        public Aluno Aluno { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id) {
            if (id == null) {
                return NotFound();
            }
            Aluno = await _alunoService.GetAllInformationAsync(id);
            if (Aluno == null) {
                return NotFound();
            }
            return Page();
        }
    }
}
