using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages
{
    
    public class Index3Model : PageModel
    {
        public List<Conta> Contas { get; set; } = new List<Conta>();
        public void OnGet()
        {
            Contas.Add(new Conta(1, "Wellington", 200));
            Contas.Add(new Conta(1, "LP", 400));
            Contas.Add(new Conta(1, "Tiago", 500));
        }
    }
}
