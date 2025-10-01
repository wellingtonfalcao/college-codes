using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Models;

namespace wellington_falcao_DR4_AT.Data
{
    public class AgenciaViagemDbContext : IdentityDbContext
    {
        public AgenciaViagemDbContext(DbContextOptions<AgenciaViagemDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<PacoteTuristico> PacoteTuristicos { get; set; }

    }
}
