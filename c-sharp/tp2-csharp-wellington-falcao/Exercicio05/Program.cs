using System.Globalization;

namespace Exercicio05
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite a temperatura em °C: ");
            string? entrada = Console.ReadLine();

            if (!double.TryParse(
                    entrada,
                    NumberStyles.Float,
                    CultureInfo.InvariantCulture,
                    out double celsius))
            {
                Console.WriteLine("Valor inválido.");
                return;
            }

            double fahrenheit = celsius * 9 / 5 + 32;
            double kelvin = celsius + 273.15;

            Console.WriteLine($"\n{celsius:F2} °C equivalem a:");
            Console.WriteLine($"{fahrenheit:F2} °F");
            Console.WriteLine($"{kelvin:F2} K");
        }
    }
}
