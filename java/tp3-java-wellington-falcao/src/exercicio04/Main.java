package exercicio04;

public class Main {

	public static void main(String[] args) {
		
		Produto novoProduto = new Produto();
		
		String nome = "Caneca";
		double preco = 4.50;
		int quantidadeEmEstoque = 25;
		
		novoProduto.alterarPreco(preco);
		novoProduto.alterarQuantidade(quantidadeEmEstoque);
		novoProduto.exibirInformacoes(nome);

	}

}
