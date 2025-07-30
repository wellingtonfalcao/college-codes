package exercicio03;

public class Produto {
	String nome;
	double preco;
	int quantidadeEmEstoque;
	
	double alterarPreco(double preco) {
		return this.preco = preco;
	}
	
	int alterarQuantidade(int quantidadeEmEstoque) {
		return this.quantidadeEmEstoque = quantidadeEmEstoque;
	}
	
	void exibirInformacoes() {
		System.out.println("O produto: " + nome + " tem " + quantidadeEmEstoque + " quantidade em estoque e custa: " + preco + " reais a unidade.");
	}
}