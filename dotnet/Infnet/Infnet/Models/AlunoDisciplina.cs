namespace Infnet.Models
{
    public class AlunoDisciplina
    {
        public int Id { get; set; }
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }
        public int DisciplinaId { get; set; }
        public Disciplina Disciplina { get; set; }

        public AlunoDisciplina()
        {
        }   

    }

}
