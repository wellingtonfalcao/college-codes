using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class Create6Model : PageModel
    {
        public Conta Conta { get; set; } = new();
        public void OnGet(string nome, double saldo) { 
            Conta.Nome = nome;
            Conta.Saldo = saldo;
        }

    }
}
