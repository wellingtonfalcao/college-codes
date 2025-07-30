package br.edu.infnet.tp2.exercicio05;

import java.util.Scanner;

public class CalculadoraDescontoProgressivo {

    public static void main(String[] args) {
    	double valorOriginal, percentualDesconto, valorDesconto, valorFinal;
    	
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor da compra (R$): ");
        valorOriginal = scanner.nextDouble();

        if (valorOriginal > 1000) {
            percentualDesconto = 0.10;
        } else if (valorOriginal >= 500) {
            percentualDesconto = 0.05;
        } else {
            percentualDesconto = 0.0;
        }

        valorDesconto = valorOriginal * percentualDesconto;
        valorFinal = valorOriginal - valorDesconto;

        System.out.println("\n******** TOTAL DA COMPRA *********");
        System.out.printf("Valor da compra: R$ %.2f%n", valorOriginal);
        System.out.printf("Desconto (%d%%):  R$ - %.2f%n", (int)(percentualDesconto * 100), valorDesconto);
        System.out.printf("Total: R$ %.2f%n", valorFinal);

        scanner.close();
    }
}
