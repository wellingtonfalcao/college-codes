using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class Index2Model : PageModel
    {
        public string[] Nomes { get; set; }

        public void OnGet()
        {
            Nomes = new string[4];
            Nomes[0] = "LP";
            Nomes[1] = "Arthur";
            Nomes[2] = "Lucas";
            Nomes[3] = "Thiago";
        }
    }
}
