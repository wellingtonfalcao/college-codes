namespace exercicio08
{
    public class Matricula
    {
        public string NomeDoAluno { get; set; }
        public string Curso { get; set; }
        public int NumeroMatricula { get; set; }
        public string Situacao { get; set; }
        public string DataInicial { get; set; }

        public void Trancar() {
            Situacao = "Trancada";
        }

        public void Reativar() {
            Situacao = "Ativa";
        }

        public void ExibirInformacoes()
        {
            Console.WriteLine($"Nome do Aluno: {NomeDoAluno}");
            Console.WriteLine($"Curso: {Curso}");
            Console.WriteLine($"Situação: {Situacao}");
            Console.WriteLine($"Data Inicial: {DataInicial}");
        }
    }
}
