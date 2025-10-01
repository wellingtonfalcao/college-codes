using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Destinos
{
    public class IndexModel : PageModel
    {
        private readonly AgenciaViagemDbContext _context;

        public IndexModel(AgenciaViagemDbContext context)
        {
            _context = context;
        }

        public IList<Destino> Destino { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Destino = await _context.Destinos.ToListAsync();
        }
    }
}
