package br.edu.infnet.tp2.exercicio01;

import java.util.Scanner;

public class CadastroUsuario {

    public static void main(String[] args) {
    	
    	int idade, tamUsuario, tamMae, tamPai;
    	String nomeUsuario, nomeMae, nomePai;
 
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu nome completo: ");
        nomeUsuario = scanner.nextLine().trim();

        System.out.print("Digite sua idade: ");
        idade = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Digite o nome da sua mãe: ");
        nomeMae = scanner.nextLine().trim();

        System.out.print("Digite o nome do seu pai: ");
        nomePai = scanner.nextLine().trim();

        System.out.println("\n***** Informações do usuário *****");
        System.out.printf("Nome:  %s%n", nomeUsuario);
        System.out.printf("Idade: %d anos%n", idade);
        System.out.printf("Nome da Mãe:   %s%n", nomeMae);
        System.out.printf("Nome do Pai:   %s%n", nomePai);

        tamUsuario = nomeUsuario.length();
        tamMae = nomeMae.length();
        tamPai = nomePai.length();

        System.out.println("\n***** Resultado da Comparação dos Nomes ******");
        
        if (tamUsuario > tamMae) {
            System.out.println("Seu nome é mais longo que de sua mãe");
        } else {
        	System.out.println("Seu nome é mais curto que de sua mãe");
        }
        
        if (tamUsuario > tamPai) {
            System.out.println("Seu nome é mais longo que de seu pai");
        } else {
        	System.out.println("Seu nome é mais curto que de seu pai");
        }

        scanner.close();
    }

}

