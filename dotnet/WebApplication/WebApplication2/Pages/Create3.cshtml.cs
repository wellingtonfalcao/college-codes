using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using WebApplication2.Models;

namespace WebApplication2.Pages
{
    public class Create3Model : PageModel
    {

        [BindProperty]
        public InputModel Input { get; set; }

        public Conta2 Conta2 { get; set; }

        public void OnPost() {
            if (!ModelState.IsValid) {
                return;
            }
            Conta2 = new Conta2(0, Input.Nome, Input.Saldo);
        }

        public class InputModel {
            public int id { get; set; }

            [Display(Name = "Nome do cliente")]
            [Required(ErrorMessage = "Nome obrigatório")]
            [MinLength(2, ErrorMessage = "Nome tem no mínimo dois caracteres")]
            public string Nome { get; set; }

            [Required(ErrorMessage = "Saldo obrigatório")]
            public double Saldo { get; set; }
        }
    }
}
