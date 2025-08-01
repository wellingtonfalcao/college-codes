using Evento1.Models;

namespace Evento1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Conta conta = new Conta(1, "João", 1000.0);
            Console.WriteLine(conta);
            conta.AlterarSaldo += TratarAlteracaoSaldo; // Assinando o evento
            conta.AlterarSaldo += TratarAlteracaoSaldoSMS; // E possivel fazer multicast
            conta.Creditar(500.0); // Credita 500
            Console.WriteLine(conta);
            conta.Debitar(200.0); // Debita 200
            Console.WriteLine(conta);
        }

        // Tratador de evento
        public static void TratarAlteracaoSaldoSMS(object sender, EventArgs e)
        {
            Console.WriteLine($"SMS: Saldo alterado");
        }
        public static void TratarAlteracaoSaldo(object sender, EventArgs e)
        {
            Console.WriteLine($"Saldo alterado");
        }
    }
}
