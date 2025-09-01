using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages
{
    public class Index3Model : PageModel
    {
        public List<Conta> Contas { get; set; } = new List<Conta>();

        public void OnGet()
        {
            Contas.Add(new Conta(1, "Arthur", 100));
            Contas.Add(new Conta(2, "Lucas", 200));
            Contas.Add(new Conta(3, "Thiago", 300));
        }
    }
}
