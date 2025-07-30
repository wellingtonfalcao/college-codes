using System.Globalization;

namespace Exercicio05
{
    internal class Program
    {
        static void Main(string[] args)
        {   
            // Atributos do programa
            DateTime dataFormatura = new DateTime(2029, 10, 08);
            DateTime dataHoje, mesAnterior;
            bool flag;

            // Bloco de loop para garantir que a data seja válida e não seja no futuro
            do
            {
                flag = true;
                Console.Write("Digite a data atual (dd/MM/yyyy): ");
                
                flag = DateTime.TryParseExact(Console.ReadLine(), "dd/MM/yyyy",
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out dataHoje);

                if (!flag)
                {
                    Console.WriteLine("\nErro: Digite uma data válida no formato dd/MM/yyyy.");
                }

                if (dataHoje > DateTime.Today)
                {
                    Console.WriteLine("\nErro: A data informada não pode ser no futuro! Digite novamente");
                    flag = false;
                }

            } while (!flag);

            // Verifica se a data de formatura é anterior à data atual
            if (dataHoje > dataFormatura)
            {
                Console.WriteLine("\nParabéns! Você já deveria estar formado!");
                return;
            }

            // Cálculo da diferença entre a data de formatura e a data atual
            int anos = dataFormatura.Year - dataHoje.Year;
            int meses = dataFormatura.Month - dataHoje.Month;
            int dias = dataFormatura.Day - dataHoje.Day;

            // Ajustes manual de precisão das datas para não apresentar numero negativo
            if (dias < 0)
            {
                meses--;
                mesAnterior = dataFormatura.AddMonths(-1);
                dias += DateTime.DaysInMonth(mesAnterior.Year, mesAnterior.Month);
            }

            if (meses < 0)
            {
                anos--;
                meses += 12;
            }

            // Exibe a mensagem de acordo com o tempo restante para a formatura
            if (anos == 0 && meses < 6 && dias != 0)
            {
                Console.WriteLine($"\nFaltam {meses} mês(es) e {dias} dia(s) para sua formatura!");
                Console.WriteLine("A reta final chegou! Prepare-se para a formatura!");
                return;
            }
            Console.WriteLine($"\nFaltam {anos} ano(s), {meses} mês(es) e {dias} dia(s) para sua formatura!");

        }
    }
}
