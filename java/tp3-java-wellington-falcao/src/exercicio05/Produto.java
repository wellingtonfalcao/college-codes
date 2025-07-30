package exercicio05;

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
	
	void exibirInformacoes(String nome) {
		System.out.println("O produto: " + nome + " tem " + quantidadeEmEstoque + " unidades em estoque e custa: " + preco + " reais a unidade.");
	}

	String getNome() {
		return nome;
	}

	void setNome(String nome) {
		this.nome = nome;
	}

	double getPreco() {
		return preco;
	}

	void setPreco(double preco) {
		this.preco = preco;
	}

	int getQuantidadeEmEstoque() {
		return quantidadeEmEstoque;
	}

	void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
		this.quantidadeEmEstoque = quantidadeEmEstoque;
	}
}