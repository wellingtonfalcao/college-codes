using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Clientes
{
    public class CreateModel : PageModel
    {
        private readonly wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext _context;

        public CreateModel(wellington_falcao_DR4_AT.Data.AgenciaViagemDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Cliente Cliente { get; set; } = default!;

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Clientes.Add(Cliente);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
