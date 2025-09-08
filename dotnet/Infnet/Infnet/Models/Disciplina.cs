namespace Infnet.Models
{
    public class Disciplina
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public List<AlunoDisciplina> AlunosDisciplinas { get; set; }
        public Disciplina() { }
    }
}
