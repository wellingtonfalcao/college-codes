using exercicio06.Pages.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace exercicio06.Pages.CountryManager
{
    public class CreateCountryModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }

        public Country Country { get; set; }

        public class InputModel
        {
            [Required(ErrorMessage = "O nome do país é obrigatório.")]
            [MinLength(3, ErrorMessage = "O nome deve ter pelo menos 3 caracteres.")]
            public string CountryName { get; set; }

            [Required(ErrorMessage = "O código do país é obrigatório.")]
            [StringLength(2, MinimumLength = 2, ErrorMessage = "O código deve ter exatamente 2 letras.")]
            public string CountryCode { get; set; }
        }
        public void OnPost()
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            // Cria a entidade de domínio a partir do InputModel
            Country = new Country
            {
                CountryName = Input.CountryName,
                CountryCode = Input.CountryCode.ToUpper()
            };
        }
    }
}
