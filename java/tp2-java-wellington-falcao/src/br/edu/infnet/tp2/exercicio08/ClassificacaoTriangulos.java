package br.edu.infnet.tp2.exercicio08;

import java.util.Scanner;

public class ClassificacaoTriangulos {

	public static void main(String[] args) {
		
		String tipo;
		double a, b, c;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o comprimento do lado A: ");
        a = scanner.nextDouble();

        System.out.print("Digite o comprimento do lado B: ");
        b = scanner.nextDouble();

        System.out.print("Digite o comprimento do lado C: ");
        c = scanner.nextDouble();

        if (a < 1 || b < 1 | c < 1) {
            System.err.println("\nNenhum lado do triângulo pode ser zerado");
            scanner.close();
            return;
        }

        if (a == b && b == c) {
            tipo = "EQUILÁTERO (três lados iguais)";
        } else if (a == b || a == c || b == c) {
            tipo = "ISÓSCELES (dois lados iguais)";
        } else {
            tipo = "ESCALENO (todos os lados diferentes)";
        }

        System.out.printf("%nO triângulo informado é do tipo: %s.%n", tipo);
        scanner.close();
    }
}