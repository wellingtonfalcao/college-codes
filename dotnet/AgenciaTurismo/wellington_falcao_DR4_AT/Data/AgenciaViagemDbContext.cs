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
        // DbSets para as entidades
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<PacoteTuristico> PacotesTuristicos { get; set; }

        // Relações entre as entidades
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Reserva-Cliente
            modelBuilder.Entity<Reserva>()
                .HasOne(r => r.Cliente)
                .WithMany(c => c.Reservas)
                .HasForeignKey(r => r.ClienteId)
                .OnDelete(DeleteBehavior.Restrict);

            // Reserva-PacoteTuristico
            modelBuilder.Entity<Reserva>()
                .HasOne(r => r.PacoteTuristico)
                .WithMany(p => p.Reservas)
                .HasForeignKey(r => r.PacoteTuristicoId)
                .OnDelete(DeleteBehavior.Restrict);

            // PacoteTuristico-Destino
            modelBuilder.Entity<PacoteTuristico>()
                .HasMany(p => p.Destinos)
                .WithMany();
        }
    }
}