package br.edu.infnet.tp2.exercicio11;

import java.util.Scanner;

public class SequenciadorNumerico {

	public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Valor inicial: ");
        int inicial = scanner.nextInt();

        System.out.print("Incremento: ");
        int incremento = scanner.nextInt();

        System.out.print("\nSequência: ");

        boolean primeiro = true;
        for (int atual = inicial; atual <= 100; atual += incremento) {

            if (!primeiro) {
                System.out.print(", ");
            }
            System.out.print(atual);
            primeiro = false;
        }

        System.out.println();
        scanner.close();
    }
}