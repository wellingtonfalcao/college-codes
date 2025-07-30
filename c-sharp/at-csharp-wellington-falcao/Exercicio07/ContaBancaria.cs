using System.Globalization;

namespace Exercicio07
{
    public class ContaBancaria
    {
        // Atributos do programa
        public string titular;
        private double saldo = 0;

        // Método para realizar depósito
        public void Depositar(double valor) 
        {
            if (valor <= 0)
            {
                Console.WriteLine("O valor do depósito deve ser positivo!\n");
            }
            else {
                saldo += valor;
                Console.WriteLine($"Depósito de R$ {valor.ToString("C", new CultureInfo("pt-BR"))} realizado com sucesso!\n");
            }
                
        }

        // Método para realizar o saque e verifica se saldo é suficiente 
        public void Sacar(double valor) 
        { 
            if(saldo < valor)
            {
                Console.WriteLine($"Tentativa de saque: {valor.ToString("C", new CultureInfo("pt-BR"))}");
                Console.WriteLine("Saldo insuficiente para realizar o saque!\n");
            }
            else
            {
                saldo -= valor;
                Console.WriteLine($"Saque de R$ {valor.ToString("C", new CultureInfo("pt-BR"))} realizado com sucesso!\n");
            }
        }

        // Método para exibir o saldo atual formatado
        public void ExibirSaldo() 
        {
            Console.WriteLine($"Saldo atual: R$ {saldo.ToString("C", new CultureInfo("pt-BR"))}\n");
        }
    }
}
