package exercicio12;

public class TestarFiguras {
	
	public static void main(String[] args) {
		
		double area, volume;
		
		Circulo novoCirculo = new Circulo();
		Esfera novaEsfera = new Esfera();
		
		novoCirculo.raio = 3.0;
		novaEsfera.raio = 5.0;
		
		area = novoCirculo.calcularArea();
		volume = novaEsfera.calcularVolume();
		
		System.out.println("A área do circulo é: " + area);
		System.out.println("O volume da esfera é: " + volume);

	}
}
