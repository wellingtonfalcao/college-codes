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

        public Conta2 Conta2{ get; set; }
        public void OnPost() //Será executado ao formulário ser submetido
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            Conta2 = new Conta2(0, Input.Nome, Input.Saldo);
          
        }

        public class InputModel
        {
            public int Id { get; set; }

            // Decorators para validação de dados em InputModel 
            [Display(Name = "Nome do Cliente")]
            [Required(ErrorMessage = "Nome obrigatório")]
            [MinLength(2, ErrorMessage = "Nome tem que ter no mínimo 2 caracteres")]
            public string Nome { get; set; }

            [Required(ErrorMessage = "Saldo obrigatório")]
            public double Saldo { get; set; }
        }
    }
}
