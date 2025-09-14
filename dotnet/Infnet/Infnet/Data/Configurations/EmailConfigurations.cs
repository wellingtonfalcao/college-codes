using Infnet.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infnet.Data.Configurations {
    public class EmailConfigurations : IEntityTypeConfiguration<Email> {

        public void Configure(EntityTypeBuilder<Email> builder) {
            builder.Property(e => e.Id).HasColumnName("id_email");
            builder.Property(e => e.Mail).HasMaxLength(50);
            builder.HasData(new List<Email> {
                new Email { Id = 1, Mail = "aluno1@email.com", AlunoId = 1 },
                new Email { Id = 2, Mail = "aluno2@email.com", AlunoId = 2 },
                new Email { Id = 3, Mail = "aluno2@gmail.com", AlunoId = 2 },
                new Email { Id = 4, Mail = "aluno3@email.com", AlunoId = 3 },
                new Email { Id = 5, Mail = "aluno3@gmail.com", AlunoId = 3 },
                new Email { Id = 6, Mail = "aluno3@infnet.edu", AlunoId = 3 }
            });
        }
    }
}
