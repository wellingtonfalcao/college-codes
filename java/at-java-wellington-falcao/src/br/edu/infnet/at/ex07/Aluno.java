package br.edu.infnet.at.ex07;

import java.util.Scanner;

public class Aluno {
	
	private String nomeAluno;
	private double nota1, nota2, nota3;
	int matricula;
	
	
	public Aluno (String nomeAluno,int matricula, double nota1, double nota2, double nota3) {
		this.nomeAluno = nomeAluno;
		this.matricula = matricula;
		this.nota1 = nota1;
		this.nota2 = nota2;
		this.nota3 = nota3;
	}
	
	public double calcularMedia () {
		return (nota1 + nota2 + nota3) / 3;
	}
	
	public void verificarAprovacao() {
		
		double media = calcularMedia();
		
		System.out.println("");
		System.out.println("********** BOLETIM ************");
		System.out.println("Aluno: " + nomeAluno);
		System.out.println("Matrícula: " + matricula);
		System.out.println("Nota1: %.2f, Nota2: %.2f, Nota3: %.2f,".formatted(nota1, nota2, nota3));
		
		if(media >= 7) {
			System.out.println("Status: Aprovado com média %.2f.".formatted(media));
		} else {
			System.err.println("Status: Reprovado com média %.2f.".formatted(media));
		}
	}

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Digite o nome do aluno:");
		String nomeAluno = scanner.nextLine();
		
		System.out.println("Digite a matrícula nota do aluno:");
		int matricula = scanner.nextInt();
		
		System.out.println("Digite a primeira do aluno:");
		int nota1 = scanner.nextInt();

		System.out.println("Digite a segunda nota do aluno:");
		int nota2 = scanner.nextInt();
		
		System.out.println("Digite a terceira nota do aluno:");
		int nota3 = scanner.nextInt();
		
		Aluno novoAluno = new Aluno(nomeAluno, matricula ,nota1, nota2, nota3);		
	
		novoAluno.verificarAprovacao();
		
		scanner.close();
	}
}

