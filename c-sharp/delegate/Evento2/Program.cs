using Evento2.Models;

namespace Evento2
{
    public class Program
    {
        static void Main(string[] args)
        {
            Conta conta = new Conta(1, "João", 1000.0);
            Console.WriteLine(conta);
            conta.AlterarSaldo += TratarAlteracaoSaldo; // Assinando o evento
            conta.AlterarSaldo += TratarAlteracaoSaldoSMS; // Assinando o evento
            conta.Creditar(500.0); // Credita 500
            Console.WriteLine(conta);
            conta.Debitar(2000.0); // Debita 200
            Console.WriteLine(conta);
        }

        // Tratador de evento
        public static void TratarAlteracaoSaldo(object sender, AlteracaoSaldoArgs e)
        {
            Console.WriteLine(e.Mensagem);
        }

        public static void TratarAlteracaoSaldoSMS(object sender, AlteracaoSaldoArgs e)
        {
            Console.WriteLine("SMS: " + e.Mensagem);
        }
    }
}