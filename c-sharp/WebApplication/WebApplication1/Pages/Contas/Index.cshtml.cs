using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages.Contas
{
    public class IndexModel : PageModel
    {
        public List<Conta> Contas = new();
  
        public void OnGet()
        {
            //Mock de dados para simular um banco de dados
            Contas.Add(new Conta(1, "Wellington", 1000.00));
            Contas.Add(new Conta(2, "Roberto", 800.00));
            Contas.Add(new Conta(3, "Paulo", 700.00));
            Contas.Add(new Conta(4, "Ana", 900.00));
        }
    }
}
