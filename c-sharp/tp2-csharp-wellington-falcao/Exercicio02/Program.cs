namespace Exercicio02
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite sua data de nascimento (dd/mm/aaaa): ");
            string entrada = Console.ReadLine() ?? "";
         
            if (!DateTime.TryParse(entrada, out DateTime nascimento))
            {
                Console.WriteLine("Data inválida. Use o formato dd/mm/aaaa.");
                return;
            }

            DateTime hoje = DateTime.Today;
           
            DateTime proximoAniversario;
                       
            proximoAniversario = new DateTime(hoje.Year, nascimento.Month, nascimento.Day);
            
            if (proximoAniversario < hoje)
                proximoAniversario = proximoAniversario.AddYears(1);

            int diasRestantes = (proximoAniversario - hoje).Days;

            if (diasRestantes == 0)
                Console.WriteLine("Parabéns! Hoje é seu aniversário!");
            else
                Console.WriteLine($"Faltam {diasRestantes} dia(s) para o próximo aniversário.");
        }
    }
}
