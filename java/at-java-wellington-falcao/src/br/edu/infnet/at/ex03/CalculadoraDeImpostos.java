package br.edu.infnet.at.ex03;

import java.util.Scanner;

public class CalculadoraDeImpostos {

    public static void main(String[] args) {
        String msgInicial = "********** CALCULADORA DE IMPOSTOS ************";
        String nome;
        double salarioMensal, salarioAnual, salarioLiquido, imposto; 
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println(msgInicial);
        
        System.out.println("Digite seu nome:");
        nome = scanner.nextLine();
        
        System.out.println("Digite seu salário bruto mensal:");
        salarioMensal = scanner.nextDouble();
        
        salarioAnual = salarioMensal * 12.00;
        System.out.println("%s, Seu salário bruto anual é de R$ %.2f.".formatted(nome, salarioAnual));
        
        if (salarioAnual < 22847.76) {
            salarioLiquido = salarioMensal;
            System.out.println("%s, você é isento de imposto de renda com salário líquido mensal de R$ %.2f."
                .formatted(nome, salarioLiquido));
        } else if (salarioAnual < 33919.80) {
            imposto = salarioMensal * 0.075;
            salarioLiquido = salarioMensal - imposto;
            System.out.println("Seu imposto de renda é de 7,5%% com salário líquido mensal de R$ %.2f.".formatted(salarioLiquido));
        } else if (salarioAnual < 45012.60) {
            imposto = salarioMensal * 0.15;
            salarioLiquido = salarioMensal - imposto;
            System.out.println("Seu imposto de renda é de 15%% com salário líquido mensal de R$ %.2f.".formatted(salarioLiquido));
        } else {
        	imposto = salarioMensal * 0.275;
            salarioLiquido = salarioMensal - imposto;
            System.out.println("Seu imposto de renda é de 27,5%% com salário líquido mensal de R$ %.2f.".formatted(salarioLiquido));
        }

        scanner.close();
    }
    
}
