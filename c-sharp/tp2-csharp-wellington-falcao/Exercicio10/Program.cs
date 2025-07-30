namespace Exercicio10
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite um número inteiro: ");
            string? entrada = Console.ReadLine();
            
            if (!int.TryParse(entrada, out int n))
            {
                Console.WriteLine("Valor inválido. Digite um número inteiro.");
                return;
            }

            Console.WriteLine("\nContagem regressiva:");
            
            if (n >= 0)
            {
                for (int i = n; i >= 0; i--)
                {
                    Console.Write(i);
                    if (i != 0) Console.Write(", ");
                }
            }
            else
            {
                for (int i = n; i <= 0; i++)
                {
                    Console.Write(i);
                    if (i != 0) Console.Write(", ");
                }
            }

            Console.WriteLine();
        }
    }
}
