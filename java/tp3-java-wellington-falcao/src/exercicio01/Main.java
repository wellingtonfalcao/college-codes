package exercicio01;


class Pessoa { //Esta é a classe Pessoa que servirá de molde para criação de objetos
	
	String nome; //Atributo de classe do tipo String
	int idade; //Atributo de classe do tipo inteiro
	
	void mostraNome (String nome, int idade) { //Método que ao invocado mostra o nome da pessoa 
		System.out.println("Seu nome é " + nome + " e você tem " + idade + " anos.");
	}
	
}

public class Main {

	public static void main(String[] args) { // Método principal
		
		Pessoa pessoa1 = new Pessoa(); //Criando um nov objeto a partir da classe Pessoa
		
		pessoa1.nome = "Jorge"; // colocando os atributos para o novo objeto pessoa1
		pessoa1.idade = 27;

		pessoa1.mostraNome(pessoa1.nome, pessoa1.idade);

	}

}
