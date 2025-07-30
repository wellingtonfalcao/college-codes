namespace exercicio04
{
    public class Ingresso
    {
        public string NomeDoShow { get; set; }
        public double Preco { get; set; }
        public int QuantidadeDisponivel { get; set; }
        public void AlterarPreco(double novoPreco)
        {
            Preco = novoPreco;
        }

        public void AlterarQuantidade(int novaQuantidade)
        {
            QuantidadeDisponivel = novaQuantidade;
        }

        public void ExibirInformacoes()
        {
            Console.WriteLine($"Nome do Show: {NomeDoShow}");
            Console.WriteLine($"Quantidade de ingressos: {QuantidadeDisponivel}");
            Console.WriteLine($"Preço: {Preco}");
        }
        static void Main(string[] args)
        {
            Ingresso ingresso = new Ingresso
            {
                NomeDoShow = "GreenDay",
                Preco = 300.00,
                QuantidadeDisponivel = 50
            };

            ingresso.ExibirInformacoes();

            ingresso.AlterarPreco(120.00);
            ingresso.AlterarQuantidade(30);

            Console.WriteLine("\nApós alterações:");
            ingresso.ExibirInformacoes();
        }

    }
}
  

