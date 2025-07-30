package br.edu.infnet.tp2.exercicio10;

import java.util.Random;
import java.util.Scanner;

public class JogoAdvinhacao {

	public static void main(String[] args) {
		
		int numeroSecreto, tentativas, palpite;

        Random random = new Random();
        numeroSecreto = random.nextInt(100) + 1;
        tentativas = 0;

        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Jogo de Adivinhação ===");
        System.out.println("Tente descobrir o número (entre 1 e 100).");

        do {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();
            tentativas++;

            if (palpite < numeroSecreto) {
                System.out.println("O número é MAIOR que " + palpite + ".\n");
            } else if (palpite > numeroSecreto) {
                System.out.println("O número é MENOR que " + palpite + ".\n");
            } else {
                System.out.printf("Parabéns! Você acertou em %d tentativa(s).%n",
                        tentativas);
            }

        } while (palpite != numeroSecreto);

        scanner.close();
    }
}