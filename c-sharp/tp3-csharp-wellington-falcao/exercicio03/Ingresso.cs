namespace exercicio03
{
    public class Ingresso
    {
        /* Cada atributo da class é importante pois são as informações mínimas para se criar um ingresso.
        Eles possuem getters and setters inclusos, aproveitando o recurso do C# de propriedades automáticas.*/
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

    }
   
}