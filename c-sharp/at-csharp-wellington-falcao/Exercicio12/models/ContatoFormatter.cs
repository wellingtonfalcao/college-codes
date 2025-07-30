namespace Exercicio12.models
{

    //Superclasse não instanciável com o método obrigatório ExibirContatos()
    public abstract class ContatoFormatter
    {
        public abstract void ExibirContatos(List<Contato> contatos);
    }
}
