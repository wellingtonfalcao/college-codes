package br.edu.infnet.at.ex12;

import java.util.Scanner;

public class Chat {
	
	private String usuario1;
	private String usuario2;
	
	public String getUsuario1() {
		return usuario1;
	}

	public String getUsuario2() {
		return usuario2;
	}

	public void solicitarUsuarios(Scanner scanner) {
			
		System.out.println("Digite o primeiro usuário");
		usuario1 = scanner.nextLine();
		
		System.out.println("Digite o primeiro usuário");
		usuario2 = scanner.nextLine();
		
	}
	
	public String[] mensagens(String usuario1, String usuario2, Scanner scanner) {
		
		int interacoes = 5;
		
		String[] chat = new String[10];
		
		for (int i = 0; i < interacoes; i++) {
            System.out.println("%s, digite sua mensagem:".formatted(usuario1));
            chat[i * 2] = usuario1 + ": "+ scanner.nextLine();

            System.out.println("%s, digite sua mensagem:".formatted(usuario2));
            chat[i * 2 + 1] = usuario2 + ": "+ scanner.nextLine();
        }
		scanner.close();
		return chat;
	}
	
	public void exibirHistorico(String[] chat) {
		System.out.println("\n===== Histórico de Mensagens =====\n");
        for (String msg : chat) {
            System.out.println(msg);
        }
	}
}
