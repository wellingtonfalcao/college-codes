using System.Globalization;

namespace Exercicio06
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite seu peso em kg......: ");
            string? txtPeso = Console.ReadLine();

            Console.Write("Digite sua altura em metros: ");
            string? txtAltura = Console.ReadLine();

            if (!double.TryParse(txtPeso, NumberStyles.Float, CultureInfo.InvariantCulture, out double peso) ||
                !double.TryParse(txtAltura, NumberStyles.Float, CultureInfo.InvariantCulture, out double altura) ||
                peso <= 0 || altura <= 0)
            {
                Console.WriteLine("Peso ou altura inválidos.");
                return;
            }

            double imc = peso / (altura * altura);

            string classe;
            if (imc < 18.5) classe = "Abaixo do peso";
            else if (imc < 24.9) classe = "Peso normal";
            else if (imc < 29.9) classe = "Sobrepeso";
            else if (imc < 34.9) classe = "Obesidade grau I";
            else if (imc < 39.9) classe = "Obesidade grau II";
            else classe = "Obesidade grau III (mórbida)";

            Console.WriteLine($"\nSeu IMC é {imc:F2}");
            Console.WriteLine($"Classificação: {classe}");
        }
    }
}
