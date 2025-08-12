using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Conta
    {
        public int Id { get; set; }

        // Decorators para validação de dados
        [Display(Name = "Nome do Cliente")]
        [Required(ErrorMessage ="Nome obrigatório")]
        [MinLength(2, ErrorMessage = "Nome tem que ter no mínimo 2 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Saldo obrigatório")]
        public double Saldo { get; set; }

        public Conta(){
 
        }

        public Conta(int id, string nome, double saldo)
        {
            Id = id;
            Nome = nome;
            Saldo = saldo;
        }
        public override string ToString()
        {
            return $"Id: {Id}, Nome: {Nome} Saldo: {Saldo}";
        }
    }
}
