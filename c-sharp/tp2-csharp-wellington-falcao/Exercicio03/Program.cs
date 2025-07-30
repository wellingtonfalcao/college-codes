namespace Exercicio03
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite a primeira data (dd/mm/aaaa): ");
            string txt1 = Console.ReadLine() ?? "";

            Console.Write("Digite a segunda data (dd/mm/aaaa): ");
            string txt2 = Console.ReadLine() ?? "";

            if (!DateTime.TryParse(txt1, out DateTime d1) ||
                !DateTime.TryParse(txt2, out DateTime d2))
            {
                Console.WriteLine("Uma ou ambas as datas são inválidas.");
                return;
            }

            if (d1 > d2)
            {
                (d1, d2) = (d2, d1);  
            }
            
            TimeSpan intervalo = d2 - d1;
            int diasTotais = intervalo.Days;

            int anos = d2.Year - d1.Year;
            if (d2 < d1.AddYears(anos)) anos--;

            int meses = d2.Month - d1.Month;
            if (d2.Day < d1.Day) meses--;
            if (meses < 0) meses += 12;

            int dias = d2.Day - d1.Day;
            if (dias < 0)
            {
                DateTime mesAnterior = d2.AddMonths(-1);
                dias += DateTime.DaysInMonth(mesAnterior.Year, mesAnterior.Month);
            }

            Console.WriteLine($"\nIntervalo: {anos} ano(s), {meses} mês(es) e {dias} dia(s).");
            Console.WriteLine($"(Total: {diasTotais} dia(s))");
        }
    }
}
