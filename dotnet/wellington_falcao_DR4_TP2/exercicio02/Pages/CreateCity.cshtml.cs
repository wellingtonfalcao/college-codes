using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CityManager
{
    public class CreateCityModel : PageModel
    {
        public string SubmittedCity { get; set; }

        // Handler agora recebe o parâmetro diretamente
        public void OnPost(string cityName)
        {
            if (!string.IsNullOrWhiteSpace(cityName))
            {
                SubmittedCity = cityName;
            }
        }
    }
}
