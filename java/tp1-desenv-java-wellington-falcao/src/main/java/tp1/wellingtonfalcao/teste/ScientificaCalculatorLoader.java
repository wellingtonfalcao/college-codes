package tp1.wellingtonfalcao.teste;

import tp1.wellingtonfalcao.teste.main.domain.ScientificCalculator;

public class ScientificaCalculatorLoader {

	public static void main(String[] args) {
		
		ScientificCalculator calc = new ScientificCalculator();
		
		
		//Testando classe
		double result = calc.add(5, 5);
		System.out.println(result);

	}

}
