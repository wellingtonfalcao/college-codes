using System.ComponentModel.DataAnnotations;

namespace wellington_falcao_DR4_AT.Models
{
    public class PacoteTuristico
    {
        public int Id { get; set; }

        [Required]
        [MinLength(3)]
        public string Titulo { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DataInicio { get; set; }

        [Required]
        [Range(1, 1000)]
        public int CapacidadeMaxima { get; set; }

        [Required]
        [Range(0, 100000)]
        public decimal Preco { get; set; }

        public List<Destino> Destinos { get; set; } = new List<Destino>();

        public List<Reserva> Reservas { get; set; } = new List<Reserva>();
    }
}
