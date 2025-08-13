package br.edu.infnet.at.ex04;

import java.util.Scanner;

public class SimuladorImprestimo {

    public static void main(String[] args) {
        String cliente;
        final double JUROS = 1.03;
        double valor;
        int parcelas;
        final int PARCELAS_MIN = 6;
        final int PARCELAS_MAX = 48;
        double valorTotal;
        double valorParcelas;
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite seu nome:");
        cliente = scanner.nextLine();
        
        System.out.println("Digite o valor que deseja fazer um empréstimo:");
        valor = scanner.nextDouble();
        
        do {
		   System.out.println("Digite a quantidade de parcelas (entre 6 e 48):");
		   parcelas = scanner.nextInt();
		   
		   if(parcelas < 0 || parcelas < PARCELAS_MIN || parcelas > PARCELAS_MAX) {
			   System.out.println("Não é possivel fazer um empréstimo com esta quantidade de parcelas");
		   }
		   
		   
        } while (parcelas < 0 || parcelas < PARCELAS_MIN || parcelas > PARCELAS_MAX);
         
        valorParcelas = (valor / parcelas) * JUROS;
        valorTotal = valorParcelas * parcelas;
   
        System.out.println("%s, seu empréstimo no valor de R$ %.2f com %d parcelas de R$ %.2f, totalizando R$ %.2f."
        		.formatted(cliente, valor, parcelas, valorParcelas, valorTotal));
    }
    
}
