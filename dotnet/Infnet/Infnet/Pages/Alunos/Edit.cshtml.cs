using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Infnet.Models;
using Infnet.Interfaces;

namespace Infnet.Pages.Alunos {
    public class EditModel : PageModel {
        private readonly IAlunoService _alunoService;

        public EditModel(IAlunoService alunoService) {
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
            Aluno = aluno;
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int id) {
            if (!ModelState.IsValid) {
                return Page();
            }
            var alunoAtulizar = await _alunoService.GetAlunoByIdAsync(id);
            if (alunoAtulizar == null) {
                return NotFound();
            }
            if (await TryUpdateModelAsync(alunoAtulizar, "Aluno", a => a.Nome)) {
                await _alunoService.UpdateAlunoAsync(alunoAtulizar);
                return RedirectToPage("./Index");
            }
            return Page();
        }
    }
}
