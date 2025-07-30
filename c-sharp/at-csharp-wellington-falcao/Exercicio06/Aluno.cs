namespace Exercicio06
{
    public class Aluno
    {
        // Atributos com restrição privada
        private string nome, matricula, curso;
        private double mediaNotas;

        // Construtor da classe Aluno
        public Aluno(String nome, String matricula, String curso, double mediaNotas) { 
            this.nome = nome;
            this.matricula = matricula;
            this.curso = curso;
            this.mediaNotas = mediaNotas;
        }

        // Método publico para exibir os dados do aluno
        public void ExibirDados() 
        { 
            Console.WriteLine("Dados do Aluno:\n");
            Console.Write($"Nome: {nome}\nMatrícula: {matricula}\nCurso: {curso}\nMédia: {mediaNotas}\n\n");
        }

        // Método público para verificar a aprovação do aluno
        public string VerificarAprovacao()
        {
            if (mediaNotas >= 7) return "Aprovado";
         return "Reprovado"; 
        }

    }
}
