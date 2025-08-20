using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Conta2 //Versão sem o [decorator] (no Java usamos @anotation) na classe
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public double Saldo { get; set; }

        public Conta2(){}

        public Conta2(int id, string nome, double saldo)
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
