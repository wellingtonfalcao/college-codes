using exercicio09.Pages.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace exercicio09.Pages.CountryManager
{
    public class CreateCountryModel : PageModel
    {
        [BindProperty]
        public List<InputModel> Inputs { get; set; }

        public List<Country> Countries { get; set; }

        public class InputModel
        {
            [Required(ErrorMessage = "O nome do país é obrigatório.")]
            [MinLength(3, ErrorMessage = "O nome deve ter pelo menos 3 caracteres.")]
            public string CountryName { get; set; }

            [Required(ErrorMessage = "O código do país é obrigatório.")]
            [StringLength(2, MinimumLength = 2, ErrorMessage = "O código deve ter exatamente 2 caracteres.")]
            public string CountryCode { get; set; }
        }

        public void OnGet()
        {
            int numeroDePaises = 3;
            Inputs = new List<InputModel>();
            for (int i = 0; i < numeroDePaises; i++)
            {
                Inputs.Add(new InputModel());
            }
        }

        public void OnPost()
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            Countries = new List<Country>();

            foreach (var input in Inputs)
            {
                if (!string.IsNullOrWhiteSpace(input.CountryName) &&
                    !string.IsNullOrWhiteSpace(input.CountryCode))
                {
                    Countries.Add(new Country
                    {
                        CountryName = input.CountryName,
                        CountryCode = input.CountryCode.ToUpper()
                    });
                }
            }
        }
    }
}
