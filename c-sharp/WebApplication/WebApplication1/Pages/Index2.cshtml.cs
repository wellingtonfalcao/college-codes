using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    
    public class Index2Model : PageModel
    {
        public string[] Nomes { get; set; } = new string[4];
        public void OnGet()
        {
            Nomes[0] = "LP";
            Nomes[1] = "Wellington";
            Nomes[2] = "Lucas";
            Nomes[3] = "Tiago";
        }
    }
}
