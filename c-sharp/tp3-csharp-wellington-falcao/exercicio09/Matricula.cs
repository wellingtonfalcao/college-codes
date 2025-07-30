namespace exercicio09
{
    public class Matricula
    {
        public string NomeDoAluno { get; set; }
        public string Curso { get; set; }
        public int NumeroMatricula { get; set; }
        public string Situacao { get; set; }
        public string DataInicial { get; set; }

        public Matricula(string nomeDoAluno, string curso, int numeroMatricula, string dataInicial) {
            NomeDoAluno = nomeDoAluno;
            Curso = curso;
            NumeroMatricula = numeroMatricula;
            DataInicial = dataInicial;
        }

        public void Trancar() {
            Situacao = "Trancada";
        }

        public void Reativar() {
            Situacao = "Ativa";
        }

        public void ExibirInformacoes()
        {
            Console.WriteLine($"Nome do Aluno: {NomeDoAluno}");
            Console.WriteLine($"Numero da Matrícula: {NumeroMatricula}");
            Console.WriteLine($"Curso: {Curso}");
            Console.WriteLine($"Situação: {Situacao}");
            Console.WriteLine($"Data Inicial: {DataInicial}");
        }
    }

    public class Program { 
    
        public static void Main (string[] args)
        {
            Matricula novaMatricula = new Matricula("Wellington", "Engenharia", 123456, "08/10/2024");
            
            novaMatricula.Situacao = "Ativa";
            novaMatricula.ExibirInformacoes();

            novaMatricula.Trancar();
            Console.WriteLine("\nApós trancar a matrícula:");
            novaMatricula.ExibirInformacoes();

            novaMatricula.Reativar();
            Console.WriteLine("\nApós reativar a matrícula:");
            novaMatricula.ExibirInformacoes();
        }
    }
}
