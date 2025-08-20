using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class Create4Model : PageModel
    {
        public IActionResult OnPost(string nome){
            TempData["nome"] = nome;
            return RedirectToPage(""); //Redireciona para a mesma página
        }
    }
}
