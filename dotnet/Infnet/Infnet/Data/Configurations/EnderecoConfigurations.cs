using Infnet.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infnet.Data.Configurations {
    public class EnderecoConfigurations : IEntityTypeConfiguration<Endereco> {

        public void Configure(EntityTypeBuilder<Endereco> builder) {
            builder.Property(e => e.Id).HasColumnName("id_endereco");
            builder.Property(e => e.Rua).HasMaxLength(50);
            builder.HasData(new List<Endereco> {
                new Endereco { Id = 1, Rua = "Endereço do aluno 1", Cep = "11111-111", AlunoId = 1},
                new Endereco { Id = 2, Rua = "Endereço do aluno 2", Cep = "22222-222", AlunoId = 2},
                new Endereco { Id = 3, Rua = "Endereço do aluno 3", Cep = "33333-333", AlunoId = 3}
            });
        }
    }
}
