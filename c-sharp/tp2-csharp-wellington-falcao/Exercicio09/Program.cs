using System.Globalization;

namespace Exercicio09
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite o salário bruto (R$): ");
            string? entrada = Console.ReadLine();
          
            if (!double.TryParse(
                    entrada,
                    NumberStyles.Float,
                    CultureInfo.InvariantCulture,
                    out double salarioBruto) || salarioBruto < 0)
            {
                Console.WriteLine("Valor inválido.");
                return;
            }
            
            double imposto;

            if (salarioBruto <= 2112.00)
            {
                imposto = 0.0;                                   
            }
            else if (salarioBruto <= 2826.65)
            {
                imposto = salarioBruto * 0.075 - 158.40;         
            }
            else if (salarioBruto <= 3751.05)
            {
                imposto = salarioBruto * 0.15 - 370.40;     
            }
            else if (salarioBruto <= 4664.68)
            {
                imposto = salarioBruto * 0.225 - 651.73;       
            }
            else
            {
                imposto = salarioBruto * 0.275 - 884.96;       
            }

            if (imposto < 0) imposto = 0; 

            double salarioLiquido = salarioBruto - imposto;
           
            Console.WriteLine("\n==== RESUMO ====");
            Console.WriteLine($"Salário bruto : R$ {salarioBruto,10:F2}");
            Console.WriteLine($"Imposto (IRPF): R$ {imposto,10:F2}");
            Console.WriteLine($"Salário líquido: R$ {salarioLiquido,10:F2}");
            Console.WriteLine("===============");
        }
    }
}
