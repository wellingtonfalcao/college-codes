namespace Exercicio04
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool flag;
            int dia, mes, diasRestantes;
            DateTime hoje, proximoAniversario;

           Console.WriteLine("Digite sua data de nascimento");
           do
           {
                Console.Write("Dia: ");
                flag = int.TryParse(Console.ReadLine(), out dia);
                if (!flag)
                {
                    Console.WriteLine("Erro: Valor inválido. Tente novamente.");
                }

                if(dia < 1 || dia > 31)
                {
                    Console.WriteLine("Erro: Dia inválido. Deve ser entre 1 e 31.");
                    flag = false;
                }
            } while (!flag);

            Console.WriteLine("Digite seu mês de nascimento");
            do
            {
                Console.Write("Mês: ");
                flag = int.TryParse(Console.ReadLine(), out mes);
                if (!flag)
                {
                    Console.WriteLine("Erro: Valor inválido. Tente novamente.");
                }

                if (mes < 1 || mes > 12)
                {
                    Console.WriteLine("Erro: mês inválido. Deve ser entre 1 e 12.");
                    flag = false;
                }
            } while (!flag);

            hoje = DateTime.Today;
            proximoAniversario = new DateTime(hoje.Year, mes, dia);
            diasRestantes = (proximoAniversario - hoje).Days;

            if (hoje > proximoAniversario)
            {
                proximoAniversario = new DateTime(hoje.Year + 1, mes, dia);
                diasRestantes = (proximoAniversario - hoje).Days;

            } else if (diasRestantes < 7) {
                Console.WriteLine($"Ta chegando! Faltam apenas {diasRestantes} dia(s) para seu aniversário!");
            }
          
            Console.Write($"Seu próximo aniversário será daqui a {diasRestantes} dias.");
        }
    }
}
