using Infnet.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infnet.Data.Configurations
{
    public class EnderecoConfigurations : IEntityTypeConfiguration<Endereco>
    {
        public void Configure(EntityTypeBuilder<Endereco> builder)
        {
            builder.Property(e => e.Id).HasColumnName("id_endereco");
            builder.Property(e => e.Logradouro).HasMaxLength(50);
            builder.Property(e => e.Numero).HasMaxLength(10);
            builder.HasData(
                new Endereco { Id = 1, Logradouro = "Rua dos Artistas", Numero = 155, AlunoId = 1 },
                new Endereco { Id = 2, Logradouro = "Rua dos Escritores", Numero = 356, AlunoId = 2 },
                new Endereco { Id = 3, Logradouro = "Rua dos Designers", Numero = 2134, AlunoId = 3 }
                );
        }
    }
}
