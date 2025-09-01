using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication2.Models;

namespace WebApplication2.Pages {
    public class Create7Model : PageModel {
        public List<Conta> Contas { get; set; } = new();

        public void OnGet() {
            Contas.Add(new Conta(1, "Arthur", 100));
            Contas.Add(new Conta(2, "Lucas", 200));
            Contas.Add(new Conta(3, "Thiago", 300));
        }
    }
}
