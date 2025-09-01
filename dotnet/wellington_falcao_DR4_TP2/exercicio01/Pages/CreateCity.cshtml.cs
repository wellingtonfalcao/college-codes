using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CityManager
{
    public class CreateCityModel : PageModel
    {
        [BindProperty]
        public string CityName { get; set; }

        public string SubmittedCity { get; set; }

         public void OnPost()
        {
            if (!string.IsNullOrWhiteSpace(CityName))
            {
                SubmittedCity = CityName;
            }
        }
    }
}
