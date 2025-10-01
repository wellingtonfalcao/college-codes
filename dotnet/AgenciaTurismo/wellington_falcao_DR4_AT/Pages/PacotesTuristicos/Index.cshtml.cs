using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.PacotesTuristicos
{
    public class IndexModel : PageModel
    {
        private readonly AgenciaViagemDbContext _context;

        public IndexModel(AgenciaViagemDbContext context)
        {
            _context = context;
        }

        public IList<PacoteTuristico> PacoteTuristico { get;set; } = default!;

        public async Task OnGetAsync()
        {
            PacoteTuristico = await _context.PacoteTuristicos.ToListAsync();
        }
    }
}
