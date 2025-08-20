using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class Create1Model : PageModel
    {
        [BindProperty] //Permite que a view mande dados para o cotroller
        public string Nome { get; set; }
    } 
}
