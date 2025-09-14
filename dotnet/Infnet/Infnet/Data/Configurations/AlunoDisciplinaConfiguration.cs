using Infnet.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Infnet.Data.Configurations {
    public class AlunoDisciplinaConfiguration : IEntityTypeConfiguration<AlunoDisciplina> {
        public void Configure(EntityTypeBuilder<AlunoDisciplina> builder) {
            builder.Property(ad => ad.AlunoId).HasColumnName("id_aluno");
            builder.Property(ad => ad.DisciplinaId).HasColumnName("id_disciplina");
            builder.HasData(
                new AlunoDisciplina { Id = 1, AlunoId = 1, DisciplinaId = 1 },
                new AlunoDisciplina { Id = 2, AlunoId = 2, DisciplinaId = 1 },
                new AlunoDisciplina { Id = 3, AlunoId = 2, DisciplinaId = 2 },
                new AlunoDisciplina { Id = 4, AlunoId = 3, DisciplinaId = 1 },
                new AlunoDisciplina { Id = 5, AlunoId = 3, DisciplinaId = 2 },
                new AlunoDisciplina { Id = 6, AlunoId = 3, DisciplinaId = 3 }
            );
        }
    }
}
