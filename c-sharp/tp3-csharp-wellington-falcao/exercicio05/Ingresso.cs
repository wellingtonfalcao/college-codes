using System;

namespace exercicio05
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
    }

    class Program
    {
        static void Main(string[] args)
        {
            Ingresso novoIngresso = new Ingresso();
            novoIngresso.AlterarPreco(200);

            Console.WriteLine($"O valor do ingresso é de {novoIngresso.Preco}");
        }
    }
}

