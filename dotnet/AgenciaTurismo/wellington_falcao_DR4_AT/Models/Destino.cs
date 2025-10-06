using System.ComponentModel.DataAnnotations;

namespace wellington_falcao_DR4_AT.Models
{
    public class Destino
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "A cidade é obrigatória.")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "A cidade deve ter entre 3 e 100 caracteres.")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "O país é obrigatório.")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "O país deve ter entre 3 e 100 caracteres.")]
        public string Pais { get; set; }
    }
}
