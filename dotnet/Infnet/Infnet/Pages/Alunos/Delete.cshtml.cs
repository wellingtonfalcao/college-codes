using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Models;
using Infnet.Interfaces;

namespace Infnet.Pages.Alunos {
    public class DeleteModel : PageModel {
        private readonly IAlunoService _alunoService;

        public DeleteModel(IAlunoService alunoService) {
            _alunoService = alunoService;
        }

        [BindProperty]
        public Aluno Aluno { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id) {
            if (id == null) {
                return NotFound();
            }
            var aluno = await _alunoService.GetAlunoByIdAsync(id);
            if (aluno == null) {
                return NotFound();
            }
            else {
                Aluno = aluno;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id) {
            await _alunoService.DeleteAlunoAsync(id);
            return RedirectToPage("./Index");
        }
    }
}
