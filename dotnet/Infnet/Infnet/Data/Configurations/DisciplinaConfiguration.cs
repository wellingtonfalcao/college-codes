using Infnet.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Infnet.Data.Configurations {
    public class DisciplinaConfiguration : IEntityTypeConfiguration<Disciplina> {

        public void Configure(EntityTypeBuilder<Disciplina> builder) {
            builder.Property(d => d.Id).HasColumnName("id_disciplina");
            builder.Property(d => d.Nome).HasColumnName("nome_disciplina");
            builder.Property(d => d.Nome).HasMaxLength(30);
            builder.HasData(
                new Disciplina { Id = 1, Nome = "Disciplina 1" },
                new Disciplina { Id = 2, Nome = "Disciplina 2" },
                new Disciplina { Id = 3, Nome = "Disciplina 3" }
            );
        }
    }
}
