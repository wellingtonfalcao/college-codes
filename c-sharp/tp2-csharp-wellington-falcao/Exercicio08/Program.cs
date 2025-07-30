using System.Globalization;

namespace Exercicio08
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite uma nota de 0 a 10: ");
            string? entrada = Console.ReadLine();

            if (!double.TryParse(
                    entrada,
                    NumberStyles.Float,
                    CultureInfo.InvariantCulture,
                    out double nota))
            {
                Console.WriteLine("Valor inválido.");
                return;
            }

            if (nota < 0 || nota > 10)
            {
                Console.WriteLine("A nota deve estar entre 0 e 10.");
                return;
            }

            string classificacao;

            if (nota < 5) classificacao = "Insuficiente"; 
            else if (nota < 7) classificacao = "Regular"; 
            else if (nota < 9) classificacao = "Bom";   
            else classificacao = "Excelente"; 

            Console.WriteLine($"\nNota: {nota:F1}  ==>  {classificacao}");
        }
    }
}
