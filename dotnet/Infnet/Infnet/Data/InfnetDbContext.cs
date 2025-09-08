using Infnet.Data.Configurations;
using Infnet.Models;
using Microsoft.EntityFrameworkCore;

namespace Infnet.Data
{
    public class InfnetDbContext : DbContext
    {
        public InfnetDbContext(DbContextOptions<InfnetDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) { 
            modelBuilder.ApplyConfiguration(new AlunoConfigurations());
            modelBuilder.ApplyConfiguration(new EnderecoConfigurations());
        }

            public DbSet<Aluno> Alunos { get; set; }
            public DbSet<Endereco> Enderecos { get; set; }
            public DbSet<Email> Emails { get; set; }
            public DbSet<Disciplina> Disciplinas { get; set; }
            public DbSet<AlunoDisciplina> AlunosDisciplinas { get; set; }


    }
        
}

