using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class Create1Model : PageModel
    {
        [BindProperty]
        public string Nome { get; set; }
        public bool FormEnviado { get; set; }
        public void OnGet()
        {
            FormEnviado = false;
        }

        public void OnPost()
        {
            Console.WriteLine($"Name: {Nome}");
            FormEnviado = true;
        }
    }
}
