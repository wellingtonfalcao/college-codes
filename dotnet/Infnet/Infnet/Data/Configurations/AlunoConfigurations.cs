using Infnet.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infnet.Data.Configurations
{
    public class AlunoConfigurations : IEntityTypeConfiguration<Aluno>
    {
        public void Configure(EntityTypeBuilder<Aluno> builder)
        {
            builder.Property(a => a.Id).HasColumnName("id_aluno");
            builder.Property(a => a.Nome).HasColumnName("nome_aluno");
            builder.Property(a => a.Nome).HasMaxLength(50);
            builder.HasData(
                new Aluno { Id = 1, Nome = "Aluno 1" },
                new Aluno { Id = 2, Nome = "Aluno 2" },
                new Aluno { Id = 3, Nome = "Aluno 3" }
                );
        }
    }
}
