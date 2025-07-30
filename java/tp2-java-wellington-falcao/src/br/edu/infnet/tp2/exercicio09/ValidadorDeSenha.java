package br.edu.infnet.tp2.exercicio09;

import java.util.Scanner;

public class ValidadorDeSenha {

	public static void main(String[] args) {
		
		String tentativa, senhaCadastrada;

        Scanner scanner = new Scanner(System.in);

        do {
			System.out.print("Crie uma senha: ");
			senhaCadastrada = scanner.nextLine();
			
			System.out.print("Confirme a senha: ");
			tentativa = scanner.nextLine();

            if (!tentativa.equals(senhaCadastrada)) {
                System.out.println("\nAs senhas não são iguais, tente novamente\n");
            }
            
        } while (!tentativa.equals(senhaCadastrada));

        System.out.println("\nSenha cadastrada com sucesso!");

        scanner.close();
    }
}