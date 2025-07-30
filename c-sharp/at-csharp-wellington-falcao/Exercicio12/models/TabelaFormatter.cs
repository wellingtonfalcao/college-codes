namespace Exercicio12.models
{
    // Classe que formata a exibição de contatos em uma tabela
    public class TabelaFormatter : ContatoFormatter
    {
        // Método que sobrescreve o método abstrato ExibirContatos da superclasse
        public override void ExibirContatos(List<Contato> contatos)
        {
            Console.WriteLine("----------------------------------------");
            Console.WriteLine("| Nome           | Telefone       | Email           |");
            Console.WriteLine("----------------------------------------");
            foreach (var c in contatos)
            {
                Console.WriteLine($"| {c.Nome,-14} | {c.Telefone,-14} | {c.Email,-15} |");
            }
            Console.WriteLine("----------------------------------------");
        }
    }
}
