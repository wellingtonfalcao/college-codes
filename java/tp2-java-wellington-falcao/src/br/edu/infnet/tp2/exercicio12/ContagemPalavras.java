package br.edu.infnet.tp2.exercicio12;

import java.util.Scanner;

public class ContagemPalavras {

	public static void main(String[] args) {
		String frase;
		int total = 0;
		
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite uma frase: ");
        frase = scanner.nextLine().trim();

        String[] palavras = frase.split(" ");
        
        for (String p : palavras) {
            if (!p.isEmpty()) {
                total++;
            }
        }
        
        if(total > 1) {
        	System.out.printf("A frase contém %d palavra(s).%n", total);
        } else {
        	System.out.printf("Isto é apenas uma palavra");
        }
        
        scanner.close();
    }
}