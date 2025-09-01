using Microsoft.AspNetCore.Mvc.RazorPages;

namespace exercicio09.Pages.CityManager
{
    public class CityDetailsModel : PageModel
    {
        public string CityName { get; set; }

        //Usei via handler
        public void OnGet(string cityName)
        {
            CityName = cityName;
        }
    }
}
