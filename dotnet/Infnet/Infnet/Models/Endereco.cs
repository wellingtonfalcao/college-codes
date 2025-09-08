namespace Infnet.Models
{
    public class Endereco
    {
        public int Id { get; set; }
        public string Logradouro { get; set; }
        public int Numero { get; set; }

        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public Endereco() { }
    }
}
