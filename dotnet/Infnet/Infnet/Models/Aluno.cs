namespace Infnet.Models
{
    public class Aluno
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public Endereco Endereco { get; set; }

        public List<Email> Emails { get; set; }

        public List<AlunoDisciplina> AlunosDisciplinas { get; set; }

        public Aluno() {}
    }
}
