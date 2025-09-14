using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;

namespace Infnet.Models {
    public class Aluno {
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        public string Nome { get; set; }

        [ValidateNever] 
        public Endereco Endereco { get; set; }
        // public Endereco? Endereco { get; set; }

        [ValidateNever]
        public List<Email> Emails { get; set; }
        
        [ValidateNever]
        public List<AlunoDisciplina> AlunoDisciplina { get; set; }

        public DateTime? DeleteAt { get; set; }

        public Aluno() { }
    }
}
