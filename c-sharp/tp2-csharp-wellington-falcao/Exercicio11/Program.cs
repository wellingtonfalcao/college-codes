namespace Exercicio11
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

            Console.WriteLine($"\nTabuada do {numero}:");

            for (int i = 1; i <= 10; i++)
            {
                int resultado = numero * i;
                Console.WriteLine($"{numero} x {i,2} = {resultado}");
            }
        }
    }
}
