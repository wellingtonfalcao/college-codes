using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages.Contas
{
    public class CreateModel : PageModel
    {
        //BindProperty � um atributo que vincula dados de formul�rios a propriedades do modelo pelo .net sem ser pela url.
        [BindProperty]
        
        public Conta Conta { get; set; }

        //Onpost � um m�todo que lida com requisi��es HTTP POST.
        public IActionResult OnPost(){
            Console.WriteLine(Conta);
            return RedirectToPage();
        }
    }
}
