using System;

namespace Exercicio04
{
    class Program
    {
        

        static void Main()
        {
            Console.WriteLine("=== Monitoramento de Temperatura ===");

            var sensor = new SensorDeTemperatura();
            sensor.TemperaturaExcedida += QuandoTemperaturaExceder;

            while (true)
            {
                Console.Write("\nDigite a temperatura lida (ou 'sair' para encerrar): ");
                string entrada = Console.ReadLine();

                if (entrada.ToLower() == "sair")
                {
                    Console.WriteLine("\nPrograma encerrado pelo usuário");
                    break;
                }

                if (double.TryParse(entrada, out double valor))
                {
                    sensor.LerTemperatura(valor);
                }
                else
                {
                    Console.WriteLine("Valor inválido. Digite um número ou 'sair'.");
                }
            }
        }

        private static void QuandoTemperaturaExceder(object emissor, double temperatura)
        {
            double limiteTemp = SensorDeTemperatura.limiteTemperatura;
            Console.WriteLine($"PERIGO! Temperatura está em {temperatura}ºC, ultrapassou o limite de {limiteTemp}ºC");
        }
    }

        public class SensorDeTemperatura {
            public static double limiteTemperatura { get; set; } = 100.0;

            public event Action<object, double> TemperaturaExcedida;

 
        public void LerTemperatura(double temperatura)
        {
            Console.WriteLine($"Temperatura registrada: {temperatura} ºC");

            if (temperatura > limiteTemperatura)
            {
                TemperaturaExcedida?.Invoke(this, temperatura);
            }
        }
    }

}