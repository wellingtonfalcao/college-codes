using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Pages.Reservas
{
    public class CreateReservaModel : PageModel
    {
        private readonly AgenciaViagemDbContext _context;

        public CreateReservaModel(AgenciaViagemDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Reserva Reserva { get; set; }

        public List<SelectListItem> Clientes { get; set; }
        public List<SelectListItem> Pacotes { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            await CarregarDropdowns();
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            // Remover erros de validação das propriedades de navegação
            ModelState.Remove("Reserva.Cliente");
            ModelState.Remove("Reserva.PacoteTuristico");

            if (!ModelState.IsValid)
            {
                await CarregarDropdowns();
                return Page();
            }

            try
            {
                // Verificar se o cliente existe
                var clienteExists = await _context.Clientes
                    .AnyAsync(c => c.Id == Reserva.ClienteId);
                if (!clienteExists)
                {
                    ModelState.AddModelError("Reserva.ClienteId", "Cliente não encontrado.");
                    await CarregarDropdowns();
                    return Page();
                }

                // Verificar se o pacote existe e capacidade
                var pacote = await _context.PacotesTuristicos
                    .Include(p => p.Reservas)
                    .FirstOrDefaultAsync(p => p.Id == Reserva.PacoteTuristicoId);

                if (pacote == null)
                {
                    ModelState.AddModelError("Reserva.PacoteTuristicoId", "Pacote turístico não encontrado.");
                    await CarregarDropdowns();
                    return Page();
                }

                // Verificar capacidade
                var reservasCount = await _context.Reservas
                    .CountAsync(r => r.PacoteTuristicoId == Reserva.PacoteTuristicoId);

                if (reservasCount >= pacote.CapacidadeMaxima)
                {
                    ModelState.AddModelError("", $"Capacidade máxima ({pacote.CapacidadeMaxima}) atingida para o pacote: {pacote.Titulo}");
                    await CarregarDropdowns();
                    return Page();
                }

                // Verificar se a data da reserva é válida
                if (Reserva.DataReserva < DateTime.Today)
                {
                    ModelState.AddModelError("Reserva.DataReserva", "A data da reserva não pode ser anterior à data atual.");
                    await CarregarDropdowns();
                    return Page();
                }

                // Criar a reserva
                _context.Reservas.Add(Reserva);
                await _context.SaveChangesAsync();

                TempData["SuccessMessage"] = "Reserva criada com sucesso!";
                return RedirectToPage("./Index");
            }
            catch (DbUpdateException ex)
            {
                ModelState.AddModelError("", $"Erro ao salvar no banco de dados: {ex.Message}");
                await CarregarDropdowns();
                return Page();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", $"Erro inesperado: {ex.Message}");
                await CarregarDropdowns();
                return Page();
            }
        }

        private async Task CarregarDropdowns()
        {
            Clientes = await _context.Clientes
                .Select(c => new SelectListItem
                {
                    Value = c.Id.ToString(),
                    Text = $"{c.Nome} ({c.Email})"
                })
                .ToListAsync();

            Pacotes = await _context.PacotesTuristicos
                .Select(p => new SelectListItem
                {
                    Value = p.Id.ToString(),
                    Text = $"{p.Titulo} - R$ {p.Preco}"
                })
                .ToListAsync();
        }
    }
}