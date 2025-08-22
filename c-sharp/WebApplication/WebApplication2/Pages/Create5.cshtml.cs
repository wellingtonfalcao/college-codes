using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static WebApplication2.Pages.Create3Model;

namespace WebApplication2.Pages
{
    public class Create5Model : PageModel
    {
        [BindProperty]
        public List<InputModel> ContasEntrada { get; set; } = new();

        public List<Conta> ContasSaida { get; set; } = new();

        public void OnGet()
        {
            for(int i = 0; i < 2; i++)
            {
                ContasEntrada.Add(new InputModel());
            }
        }

        public void OnPost() 
        {
            if (!ModelState.IsValid)
            {
                return;
            }
            foreach(var conta in ContasEntrada)
            {
                ContasSaida.Add(new Conta(conta.Id, conta.Nome, conta.Saldo));
            }
        }
    }
}
