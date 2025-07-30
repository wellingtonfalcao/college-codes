package br.edu.infnet.tp2.exercicio04;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class CalculadoraIdadeDias {
    public static void main(String[] args) {
    	
    	int dia, mes, ano;
    	long diasVividos;
    	LocalDate dataNascimento, hoje;

        try (Scanner scanner = new Scanner(System.in)) {
            
        	System.out.print("Digite o dia de seu nascimento (DD): ");
            dia = scanner.nextInt();

            System.out.print("Digite o mês de seu nascimento (MM): ");
            mes = scanner.nextInt();

            System.out.print("Digite o ano de seu nascimento (YYYY): ");
            ano = scanner.nextInt();

            dataNascimento = LocalDate.of(ano, mes, dia);
            hoje = LocalDate.now();

            if (dataNascimento.isAfter(hoje)) {
                System.out.println("Não coloque uma data posterior ao dia de hoje");
                return;
            }

            diasVividos = ChronoUnit.DAYS.between(dataNascimento, hoje);

            System.out.printf("%nVocê já viveu %,d dias!%n", diasVividos);

        } catch (DateTimeException err) {
            System.out.println("Data inválida: " + err.getMessage());
        }
    }
}
