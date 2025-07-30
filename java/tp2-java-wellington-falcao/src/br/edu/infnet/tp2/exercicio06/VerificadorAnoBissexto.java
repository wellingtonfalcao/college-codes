package br.edu.infnet.tp2.exercicio06;

import java.util.Scanner;

public class VerificadorAnoBissexto {

	public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um ano: ");
        int ano = scanner.nextInt();

        boolean ehBissexto = (ano % 400 == 0) || ((ano % 4 == 0) && (ano % 100 != 0));

        if (ehBissexto) {
            System.out.printf("%d é um ano bissexto.%n", ano);
        } else {
            System.out.printf("%d NÃO é um ano bissexto.%n", ano);
        }

        scanner.close();
    }
}
