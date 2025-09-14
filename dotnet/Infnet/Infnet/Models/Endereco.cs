namespace Infnet.Models {
    public class Endereco {
        public int Id { get; set; }
        public string Rua { get; set; }
        public string Cep { get; set; }

        // Chave estrangeira
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public Endereco() { }
    }
}
