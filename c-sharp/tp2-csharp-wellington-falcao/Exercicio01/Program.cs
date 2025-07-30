namespace Exercicio01
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite sua data de nascimento (dd/mm/aaaa): ");
            string entrada = Console.ReadLine() ?? "";

            DateTime nascimento;
            if (!DateTime.TryParse(entrada, out nascimento))
            {
                Console.WriteLine("Data inválida. Use o formato dd/mm/aaaa.");
                return;
            }

            DateTime hoje = DateTime.Today;

            int anos = hoje.Year - nascimento.Year;
            if (nascimento > hoje.AddYears(-anos)) anos--;   
            
            int meses = hoje.Month - nascimento.Month;
            if (hoje.Day < nascimento.Day) meses--;          
            if (meses < 0) meses += 12;                      
        
            int dias = hoje.Day - nascimento.Day;
            if (dias < 0)
            {                
                DateTime mesAnterior = hoje.AddMonths(-1);
                dias += DateTime.DaysInMonth(mesAnterior.Year, mesAnterior.Month);
            }

            Console.WriteLine($"Idade: {anos} ano(s), {meses} mês(es) e {dias} dia(s).");
        }
    }
}
