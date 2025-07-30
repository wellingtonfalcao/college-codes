namespace Exercicio10
{
    public class JogoAdivinhacao
    {

        // Atributos do programa
        int numeroSecreto;
        int chute;
        string entradaUsuario;

        const int MAX_TENTATIVAS = 5;

        // Método para iniciar o jogo
        public void IniciarJogo()
        {
            Random random = new Random();
            numeroSecreto = random.Next(1, 51);

            Console.WriteLine("**** Jogo de Adivinhação ****");
            Console.WriteLine("Tente adivinhar o número entre 1 e 50");
            Console.WriteLine($"Você tem no máximo {MAX_TENTATIVAS} tentativas.\n");

            for (int tentativa = 1; tentativa <= MAX_TENTATIVAS; tentativa++)
            {
                Console.Write($"Tentativa {tentativa}: ");
                entradaUsuario = Console.ReadLine();

                // Verifica se a entrada é um número válido e decrementa para não contar como tentativa
                if (!int.TryParse(entradaUsuario, out chute))
                {
                    Console.WriteLine("Entrada inválida! Digite um número entre 1 e 50.\n");
                    tentativa--;
                    continue;
                }

                if (chute < 1 || chute > 50)
                {
                    Console.WriteLine("Número fora do intervalo permitido\n");
                    tentativa--;
                    continue;
                }

                if (chute == numeroSecreto)
                {
                    Console.WriteLine($"\nParabéns! Você acertou o número em {tentativa} tentativa(s).");
                    return;
                }
            }
            // Se o usuário não acertar o número após todas as tentativas
            Console.WriteLine($"\nSuas {MAX_TENTATIVAS} tentativas acabaram.");
            Console.WriteLine($"O número correto era: {numeroSecreto}");
        }
    }
}
