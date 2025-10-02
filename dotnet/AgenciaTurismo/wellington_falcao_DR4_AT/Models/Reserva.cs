using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using wellington_falcao_DR4_AT.Data;

namespace wellington_falcao_DR4_AT.Models
{
    public class Reserva
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O cliente é obrigatório.")]
        [Display(Name = "Cliente")]
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; } 

        [Required(ErrorMessage = "O pacote é obrigatório.")]
        [Display(Name = "Pacote Turístico")]
        public int PacoteTuristicoId { get; set; }
        
        public PacoteTuristico PacoteTuristico { get; set; } 

        [Required(ErrorMessage = "A data da reserva é obrigatória.")]
        [DataType(DataType.Date)]
        [Display(Name = "Data da Reserva")]
        public DateTime DataReserva { get; set; }

        public static event Action<string, int> CapacidadeAlcancada;

        public static void ChecarCapacidade(AgenciaViagemDbContext context, int pacoteTuristicoId)
        {
            var pacote = context.PacotesTuristicos
                .Include(p => p.Reservas) 
                .FirstOrDefault(p => p.Id == pacoteTuristicoId);

            if (pacote != null && (pacote.Reservas?.Count ?? 0) >= pacote.CapacidadeMaxima)
            {
                CapacidadeAlcancada?.Invoke($"Capacidade máxima atingida para o pacote: {pacote.Titulo}", pacote.CapacidadeMaxima);
            }
        }
    }
}
