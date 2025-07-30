namespace Exercicio12.models
{
    // Classe que formata a exibição de contatos em texto bruto
    public class TextoPuroFormatter : ContatoFormatter
    {
        // Método que sobrescreve o método abstrato ExibirContatos da superclasse
        public override void ExibirContatos(List<Contato> contatos)
        {
            foreach (var c in contatos)
            {
                Console.WriteLine($"Nome: {c.Nome} | Telefone: {c.Telefone} | Email: {c.Email}");
            }
        }
    }
}
