using AgenciaTurismo.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AgenciaTurismo.Pages.PacotesTuristicos
{
    public class CalculateDiscountModel : PageModel
    {
        [BindProperty]
        public decimal PrecoOriginal { get; set; }

        [BindProperty]
        public decimal PrecoComDesconto { get; set; }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            PrecoComDesconto = PrecoOriginal * 0.9m;

            return Page();
        }
    }
}
