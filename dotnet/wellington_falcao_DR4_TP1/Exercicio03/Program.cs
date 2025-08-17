using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== Cálculo de Área de Retângulo com Func ===");

        Console.Write("Informe a base do retângulo: ");
        double baseRetangulo = double.Parse(Console.ReadLine());

        Console.Write("Informe a altura do retângulo: ");
        double alturaRetangulo = double.Parse(Console.ReadLine());

        Func<double, double, double> calcularArea = (b, h) => b * h;

        double area = calcularArea(baseRetangulo, alturaRetangulo);

        Console.WriteLine($"\nA área do retângulo é: {area:F2}");
    }
}