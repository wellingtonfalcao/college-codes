package br.edu.infnet.at.ex12;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		String[] mensagens;
		Chat chat = new Chat();
		Scanner scanner = new Scanner(System.in);
		
		chat.solicitarUsuarios(scanner);
		mensagens = chat.mensagens(chat.getUsuario1(), chat.getUsuario2(), scanner);
		chat.exibirHistorico(mensagens);
		
		System.out.println("\nObrigado por utilizarem o sistema! Boa sorte para vocês!");

	}

}
