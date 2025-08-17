using System;

namespace Exercicio01
{
    class Program
    {

        static void Main(string[] args)
        {
            SolicitarValor();
        }

        private delegate decimal CalculateDiscount(decimal precoOriginal);
        private static void SolicitarValor()
        {
            decimal valor = 0;

            Console.Write("Informe o preço original do produto: ");
            string entrada = Console.ReadLine();

            if (decimal.TryParse(entrada, out decimal precoOriginal))
            {
                var desconto = new CalculateDiscount(AplicarDesconto10);
                var precoFinal = desconto(precoOriginal);

                Console.WriteLine($"Preço original: R$ {precoOriginal:F2}");
                Console.WriteLine($"Preço com desconto: R$ {precoFinal:F2}");
            }
            else {
                Console.WriteLine("Valor inválido. Digite um número válido.");
            }
                
        }
        
        private static decimal AplicarDesconto10(decimal preco)
        {
            return preco - (preco * 0.10m);

        }
    } 
}