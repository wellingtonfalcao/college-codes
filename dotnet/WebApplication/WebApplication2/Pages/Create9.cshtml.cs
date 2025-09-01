using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication2.Models;

namespace WebApplication2.Pages
{
    public class Create9Model : PageModel
    {
        List<Conta> Contas { get; set; } = new();

        public Conta Conta { get; set; }

        public int Id { get; set; }

        public void OnGet(int id) {
            Contas.Add(new Conta(1, "Arthur", 100));
            Contas.Add(new Conta(2, "Lucas", 200));
            Contas.Add(new Conta(3, "Thiago", 300));
            if ((id <= 0) || (id > Contas.Count)) {
                Conta = null;
            }
            else {
                Conta = Contas[id - 1];
            }
        }
    }
}
