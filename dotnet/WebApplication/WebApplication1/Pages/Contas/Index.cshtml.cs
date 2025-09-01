using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages.Contas
{
    public class IndexModel : PageModel
    {
		public List<Conta> contas = new();

		public void OnGet() {
			contas.Add(new Conta(1, "Papa", 100));
			contas.Add(new Conta(2, "Pedro", 200));
			contas.Add(new Conta(3, "Pig", 300));
			contas.Add(new Conta(4, "Nathalia", 400));
		}
    }
}
