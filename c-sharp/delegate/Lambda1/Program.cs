using Lambda1.Models;

namespace Lambda1 {
    internal class Program {
        static void Main(string[] args) {
            // Lambda é função sem nome ou anônima ou arrow fuction

            List<Conta> contas = new List<Conta>();
            contas = CriarContas();
            contas.ForEach(conta => Console.WriteLine(conta));
            Console.WriteLine();
            //Conta conta = contas.Find(conta => conta.Id == 3);
            var conta = contas.Find(conta => conta.Id == 3);
            Console.WriteLine(conta);
            Console.WriteLine();
            var contas2 = contas.Where(conta => conta.Nome.StartsWith('N')).ToList();
            contas2.ForEach(conta => Console.WriteLine(conta));
            Console.WriteLine();
            var contas3 = contas.OrderBy(conta => conta.Nome).ToList();
            contas3.ForEach(conta => Console.WriteLine(conta));
            Console.WriteLine();
            var contas4 = contas.FindAll(conta => conta.Saldo > 200);
            contas4.ForEach(conta => Console.WriteLine(conta));
            //ExibirContas(contas);
        }

        public static List<Conta> CriarContas() {
            List<Conta> contas = new List<Conta>();

            contas.Add(new Conta(1, "Francisco", 100));
            contas.Add(new Conta(2, "Guilherme", 200));
            contas.Add(new Conta(3, "Lucas", 300));
            contas.Add(new Conta(4, "Nathi", 400));
            contas.Add(new Conta(5, "Nathalia", 500));
            return contas;
        }

        public static void ExibirContas(List<Conta> contas) {
            foreach (Conta conta in contas) {
                Console.WriteLine(conta);
            }
        }
    }
}
