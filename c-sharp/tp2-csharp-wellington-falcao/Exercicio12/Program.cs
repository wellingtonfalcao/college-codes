namespace Exercicio12
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            int segredo = rnd.Next(1, 101);   

            int tentativas = 0;
            bool acertou = false;

            Console.WriteLine("Jogo de Adivinhação (1 a 100)");
            Console.WriteLine("Tente descobrir o número secreto!\n");

            while (!acertou)
            {
                Console.Write("Seu palpite: ");
                string? entrada = Console.ReadLine();

                if (!int.TryParse(entrada, out int palpite))
                {
                    Console.WriteLine("Por favor, digite um número inteiro válido.\n");
                    continue;
                }

                if (palpite < 1 || palpite > 100)
                {
                    Console.WriteLine("O número deve estar entre 1 e 100.\n");
                    continue;
                }

                tentativas++;

                if (palpite == segredo)
                {
                    acertou = true;
                    Console.WriteLine($"\nParabéns! Você acertou em {tentativas} tentativa(s).");
                }
                else if (palpite < segredo)
                {
                    Console.WriteLine("É maior! Tente de novo.\n");
                }
                else 
                {
                    Console.WriteLine("É menor! Tente de novo.\n");
                }
            }
        }
    }
}
