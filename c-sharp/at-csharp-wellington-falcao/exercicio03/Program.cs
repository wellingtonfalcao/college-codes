using System.Diagnostics;

namespace exercicio03
{
    internal class Program
    {
        static void Main(string[] args)
        {   
            //Variáveis do programa
            double operando1, operando2, resultado;
            string opcao;
            bool flag;


            //Bloco de loop while para garantir que o usuário escolha uma opção válida
            while (true)
            {
                Console.WriteLine("""
                ******** Calculadora de Operações Matemáticas ********

                Escolha uma operação:

                1. Soma
                2. Subtração
                3. Multiplicação
                4. Divisão
                9. Encerrar programa

                Escolha uma opção (1-4):
                """);

                opcao = Console.ReadLine();

                if (opcao == "9")
                {
                    Console.WriteLine($"\nPrograma encerrado pelo usuário");
                    return;
                }

                if (opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4")
                {
                    Console.WriteLine($"\nErro: Opção inválida. Tente novamente\n");
                    continue;
                }
                break;
            }

            // Bloco do 1º Operando com tratamento de erro
            do
            {
                Console.WriteLine("\nDigite o primeiro operando");
                flag = double.TryParse(Console.ReadLine(), out operando1);
                if (!flag)
                {
                    Console.WriteLine("Erro: Valor inválido. Tente novamente.");
                }
            } while (!flag);

            // Bloco do 2º Operando com tratamento de erro
            do
            {
                Console.WriteLine("\nDigite o segundo operando");
                flag = double.TryParse(Console.ReadLine(), out operando2);
                if (opcao == "4" && operando2 == 0)
                {
                    Console.WriteLine("Erro: Divisão por zero não é permitida. Digite um novo valor");
                }

                if(!flag)
                {
                    Console.WriteLine("Erro: Valor inválido. Tente novamente.");
                }

            } while (operando2 == 0 && opcao == "4");

            // Bloco de execução da operação escolhida pelo usuário e saída do resultado
            switch (opcao)
            {
                case "1": 
                    resultado = operando1 + operando2;
                    Console.WriteLine($"\nResultado da soma: {resultado}");
                    break;
                case "2": 
                    resultado = operando1 - operando2;
                    Console.WriteLine($"\nResultado da subtração: {resultado}");
                    break;
                case "3": 
                    resultado = operando1 * operando2;
                    Console.WriteLine($"\nResultado da multiplicação: {resultado}");
                    break;
                case "4": 
                    resultado = operando1 / operando2;
                    Console.WriteLine($"\nResultado da divisão: {resultado}");
                    break;
            }
    
        }
    }
}
