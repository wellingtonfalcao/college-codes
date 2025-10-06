using System.ComponentModel.DataAnnotations;

namespace wellington_falcao_DR4_AT.Models
{
    public class PacoteTuristico
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O Título é obrigatório.")]
        [MinLength(3)]
        [Display(Name = "Título")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "A Data é obrigatória.")]
        [DataType(DataType.Date)]
        [Display(Name = "Data de Início")]
        public DateTime DataInicio { get; set; }

        [Range(1, 1000)]
        [Display(Name = "Capacidade Máxima")]
        public int CapacidadeMaxima { get; set; }

        [Required(ErrorMessage = "O Preço é obrigatório.")]
        [Range(0, 100000)]
        [DataType(DataType.Currency)]
        [Display(Name = "Preço")]
        public decimal Preco { get; set; }

        public List<Destino> Destinos { get; set; } = new List<Destino>();

        public List<Reserva> Reservas { get; set; } = new List<Reserva>();
    }
}
