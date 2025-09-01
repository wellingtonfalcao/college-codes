using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Pages
{
    public class Create10Model : PageModel
    {
        [BindProperty]
        public Input Input { get; set; }

        public string Resultado { get; set; }

        public void OnPost() {
            if (!ModelState.IsValid) {
                return;
            }
            if (Input.Nome == Input.SobreNome) {
                ModelState.AddModelError("", "Nome e sobrenome iguais");
            }
            else {
                Resultado = $"Nome cadastrado: {Input.Nome} {Input.SobreNome}";
            }
        }
    }

    public class Input {
        [Required]
        public string Nome { get; set; }

        [Required]
        public string SobreNome { get; set; }
    }
}
