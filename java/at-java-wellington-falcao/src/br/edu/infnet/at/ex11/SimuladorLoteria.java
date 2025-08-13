package br.edu.infnet.at.ex11;

import java.util.Random;
import java.util.Scanner;

public class SimuladorLoteria {
	
    public static void main(String[] args) {
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);

        int[] numerosSorteados = new int[6];
        int[] numerosUsuario = new int[6];

       
        for (int i = 0; i < 6; i++) {
            numerosSorteados[i] = random.nextInt(60) + 1;
        }

        
        System.out.println("Digite 6 números entre 1 e 60:");
        for (int i = 0; i < 6; i++) {
            numerosUsuario[i] = scanner.nextInt();
        }

        
        int acertos = 0;
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                if (numerosUsuario[i] == numerosSorteados[j]) {
                    acertos++;
                    break;
                }
            }
        }

      
        System.out.println("\nNúmeros sorteados:");
        for (int num : numerosSorteados) {
            System.out.print(num + " ");
        }

        System.out.println("\nSeus números:");
        for (int num : numerosUsuario) {
            System.out.print(num + " ");
        }

        System.out.println("\n\nVocê acertou " + acertos + " número(s)!");
        scanner.close();
    }
}
