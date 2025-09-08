namespace Infnet.Models
{
    public class Email
    {
        public int Id { get; set; }
        public string Mail { get; set; }

        public Aluno Aluno { get; set; }

        public Email() { }  
    }
}
