using System.ComponentModel.DataAnnotations;

namespace Infnet.Models {
    public class Email {
        public int Id { get; set; }
        public string Mail { get; set; }

        [Display(Name = "Aluno")]
        public int AlunoId { get; set; }
        public Aluno? Aluno { get; set; }

        public Email() { }
    }
}
