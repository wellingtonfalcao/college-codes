using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages.Contas
{
    public class CreateModel : PageModel
    {
		[BindProperty]
		public Conta Conta { get; set; }
		public void OnPost() {
			Console.WriteLine(Conta);
		}
    }
}
