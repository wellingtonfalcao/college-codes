using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class Create7Model : PageModel
    {
        public List<Conta> Contas { get; set; }
        public void OnGet()
        {
            Contas.Add(new Conta(1, "João", 1000.0));
            Contas.Add(new Conta(2, "Maria", 2000.0));
            Contas.Add(new Conta(3, "José", 3000.0));
        }
    }
}
