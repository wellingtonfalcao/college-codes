namespace Exercicio07
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ContaBancaria conta = new ContaBancaria();
            conta.titular = "Wellington Albuquerque Falcão";
            
            Console.WriteLine($"Titular: {conta.titular}");

            conta.Depositar(500.00);
            conta.ExibirSaldo();

            conta.Sacar(700.00);
            
            conta.Sacar(200.00);

            conta.ExibirSaldo();

        }
    }
}
