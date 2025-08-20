using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication2.Models;

namespace WebApplication2.Pages
{
    public class Create2Model : PageModel
    {

        [BindProperty]
        public Conta2 Conta { get; set; }
        public void OnPost()
        {
            if(!ModelState.IsValid)
            {
                return;
            }
            Console.WriteLine(Conta);
        }
    }
}
