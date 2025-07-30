namespace Exercicio04
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite seu nome......: ");
            string? nome = Console.ReadLine();

            Console.Write("Digite sua idade.....: ");
            string? txtIdade = Console.ReadLine();
            int idade = int.TryParse(txtIdade, out int i) ? i : 0;  

            Console.Write("Digite seu telefone..: ");
            string? telefone = Console.ReadLine();

            Console.Write("Digite seu e-mail....: ");
            string? email = Console.ReadLine();

            Console.WriteLine("\n===== DADOS CADASTRADOS =====");
            Console.WriteLine($"Nome     : {nome}");
            Console.WriteLine($"Idade    : {idade} ano(s)");
            Console.WriteLine($"Telefone : {telefone}");
            Console.WriteLine($"E-mail   : {email}");
            Console.WriteLine("=============================");
        }
    }
}
