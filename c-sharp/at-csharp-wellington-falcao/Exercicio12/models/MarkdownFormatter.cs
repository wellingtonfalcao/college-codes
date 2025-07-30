namespace Exercicio12.models
{
    // Classe que formata a exibição de contatos em Markdown
    public class MarkdownFormatter : ContatoFormatter
    {

        // Método que sobrescreve o método abstrato ExibirContatos da superclasse
        public override void ExibirContatos(List<Contato> contatos)
        {
            Console.WriteLine("## Lista de Contatos\n");
            foreach (var contato in contatos)
            {
                Console.WriteLine($"- **Nome:** {contato.Nome}\n- 📞 Telefone: {contato.Telefone}\n- 📧 Email: {contato.Email}\n");
            }
        }
    }
}
