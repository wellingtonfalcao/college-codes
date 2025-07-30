namespace exercicio06
{
    public class Ingresso
    {
        public string NomeDoShow { get; set; }
        public double Preco { get; set; }
        public int QuantidadeDisponivel { get; set; }

        //Construtor criado com os parametros obrigatórios
        public Ingresso(string nomeDoShow, double preco, int quantidadeDisponivel) {
            NomeDoShow = nomeDoShow;
            Preco = preco;
            QuantidadeDisponivel = quantidadeDisponivel;
        }
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
    }

    class Program
    {
        static void Main(string[] args)
        {
            //Utilizar um construtor desta forma facilita para criar objetos com valores iniciais,
            //evitando a necessidade de chamar métodos set para definir propriedades após a criação do objeto.
            Ingresso novoIngresso = new Ingresso("GreenDay", 200, 25000);
            novoIngresso.ExibirInformacoes();
        }
    }
}

