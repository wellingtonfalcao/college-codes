package exercicio05;

public class Main {

	public static void main(String[] args) {
		
		Produto novoProduto = new Produto();
		
		novoProduto.setNome("Caneca");
		novoProduto.setPreco(4.5);
		novoProduto.setQuantidadeEmEstoque(25);
		
		System.out.println("Nome do produto: " + novoProduto.getNome());
		System.out.println("Valor do produto: R$ " + novoProduto.getPreco());
		System.out.println("Quantidade: " + novoProduto.getQuantidadeEmEstoque());
	}

}

//Com os getters e setters eu consigo ler ou modificar os valores dos atributos de forma organizada
//Posso encapsular a classe usando modificadores de acesso e também criar métodos de validação na alteração, tornando o código mais seguro.