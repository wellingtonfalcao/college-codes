package exercicio06;

public class Produto {
	private String nome;
	private double preco;
	private int quantidadeEmEstoque;
	
	
	//Este é um construtor, com ele consigo atribuir valores aos atributos da classe através do parametro.
	public Produto (String nome, double preco, int quantidadeEmEstoque) {
		this.nome = nome; //nome é o valor obtido pelo parametro do construtor e this.nome é o atributo da classe que recebe este valor.
		this.preco = preco;
		this.quantidadeEmEstoque = quantidadeEmEstoque;
	}
	
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