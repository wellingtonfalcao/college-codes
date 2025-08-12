using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages.Contas
{
    public class CreateModel : PageModel
    {
        //BindProperty é um atributo que vincula dados de formulários a propriedades do modelo pelo .net sem ser pela url.
        [BindProperty]
        
        public Conta Conta { get; set; }

        //Onpost é um método que lida com requisições HTTP POST.
        public IActionResult OnPost(){
            Console.WriteLine(Conta);
            return RedirectToPage();
        }
    }
}
