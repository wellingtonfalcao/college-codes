namespace Exercicio12.models
{
    // Superclasse que cria os objetos de contato com os atributos:
    // Nome, Telefone e Email e seus respectivos Getters and Setters no padrão C#
    public class Contato
    {
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }

        //Construtor padrão da classe Contato
        public Contato() { 
        }

        //Construtor da classe Contato que recebe os parâmetros
        public Contato(string nome, string telefone, string email)
        {
            Nome = nome;
            Telefone = telefone;
            Email = email;
        }
    }
}
