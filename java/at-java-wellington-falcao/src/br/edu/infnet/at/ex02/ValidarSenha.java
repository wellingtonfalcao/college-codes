package br.edu.infnet.at.ex02;

import java.util.Scanner;

public class ValidarSenha {

	public static void main(String[] args) {
		String usuario, senha;
		boolean validarSenha;
		
		Scanner login = new Scanner(System.in);
		
		System.out.println("Digite o nome de usuário:");
		usuario = login.nextLine();
		
		validarSenha = false;
		
		while(!validarSenha) {
			System.out.println("Digite uma senha (contendo no mínimo 8 caracteres, e pelo menos 1 letra maiúscula e 1 caractere especial):");
			senha = login.nextLine();
			
			//Início das validações
			if(senha.length() < 8) {
				System.err.println("A senha deve conter pelo menos 8 caracteres");
				continue;
			}
			
			if(!senha.matches(".*[A-Z].*")) {
				System.err.println("A senha deve conter pelo menos 1 letra maiúscula");
				continue;
			}
			
			if(!senha.matches(".*[0-9].*")) {
                System.err.println("A senha deve conter pelo menos um número.");
                continue;
	        }
			
            if (!senha.matches(".*[@#$%&*!^+=].*")) {
                System.err.println("A senha deve conter pelo menos um caractere especial (@, #, $, %, etc.).");
                continue;
            }
            
			validarSenha = true;
			login.close();
		}
		
		System.out.println("Sucesso! %s, seu login e senha foram cadastrados!".formatted(usuario));
	}

}
