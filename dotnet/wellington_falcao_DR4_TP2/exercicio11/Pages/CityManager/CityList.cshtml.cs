using Microsoft.AspNetCore.Mvc.RazorPages;

namespace exercicio11.Pages.CityManager
{
    public class CityListModel : PageModel
    {
        public List<string> Cities { get; set; }

        public void OnGet()
        {
            Cities = new List<string> { "Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte" };
        }
    }
}
