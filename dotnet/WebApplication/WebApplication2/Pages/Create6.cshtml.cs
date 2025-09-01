using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication2.Models;

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
