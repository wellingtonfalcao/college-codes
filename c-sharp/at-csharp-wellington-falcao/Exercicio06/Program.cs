namespace Exercicio06
{
    internal class Program
    {
        
        static void Main(string[] args)
        {
            // Instancia da classe Aluno no objeto aluno utilizando o método construtor
            Aluno aluno = new Aluno("Wellington Albuquerque Falcão", "MAT023151656", "EDC", 8.0);
            aluno.ExibirDados();
            Console.WriteLine($"Status do aluno: {aluno.VerificarAprovacao()}");
        }
    }
}
