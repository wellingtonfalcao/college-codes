package br.edu.infnet.tp2.exercicio02;

import java.util.Scanner;

public class CalculadoraMedia {

    public static void main(String[] args) {
    	
    	String nome;
    	double[] notas = new double[4];
    	double soma = 0;
    	double media;

        Scanner scanner = new Scanner(System.in);
        
        System.out.printf("Digite o nome do aluno: ");
        nome = scanner.nextLine();

        for (int i = 0; i < notas.length; i++) {
            System.out.printf("Digite a nota do %dº Bimestre: ", i + 1);
            notas[i] = scanner.nextDouble();
        }

        
        for (double n : notas) {
            soma += n;
        }
        
        media = soma / notas.length;
        
        System.out.printf("%nMédia do Aluno: %.1f%n", media);

        if (media >= 7.0) {
            System.out.printf("O aluno %s está APROVADO.", nome);
        } else if (media >= 5.0) {
            System.out.printf("O aluno %s está EM RECUPERAÇÃO.", nome);
        } else {
        	System.err.printf("O aluno %s está REPROVADO.", nome);
        }

        scanner.close();
    }
}