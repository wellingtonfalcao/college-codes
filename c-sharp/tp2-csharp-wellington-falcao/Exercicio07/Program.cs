namespace Exercicio07
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite um número inteiro: ");
            string? entrada = Console.ReadLine();

            if (!int.TryParse(entrada, out int numero))
            {
                Console.WriteLine("Valor inválido. Digite um número inteiro.");
                return;
            }
        
            if (numero % 2 == 0)
                Console.WriteLine($"{numero} é par.");
            else
                Console.WriteLine($"{numero} é ímpar.");
        }
    }
}
