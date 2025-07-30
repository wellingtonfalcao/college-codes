namespace Exercicio02
{
    internal class Program
    {
        static void Main(string[] args)
        {   
            // Variáveis do programa
            string nome = "Wellington Albuquerque Falcão";
            string resultado = "";
            int deslocamento = 2;

            // Bloco de loop foreach para cifrar o nome
            foreach (char car in nome)
            {
                char novo = (char)(car + deslocamento);
                resultado += novo;
            }

            // Exibe o resultado na tela
            Console.WriteLine($"Meu nome: {nome}");
            Console.WriteLine($"Meu nome cifrado com {deslocamento} de deslocamento: {resultado}.");

        }
    }
}
