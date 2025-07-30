package exercicio09;

public class TestaConta {
	
	public static void main(String[] args) {
		
		double deposito = 500.00;
		double saque = 200.00;
		double rendimento;
		
		Conta novaConta = new Conta();
		
		novaConta.agencia = "Agencia A";
		novaConta.dataAbertura = "01/01/2000";
		novaConta.numero = 1000;
		novaConta.saldo = 1000.60;
		novaConta.titular = "Wellington";
		
		System.out.println("Seu saldo é de R$ " + novaConta.saldo);
		novaConta.deposita(deposito);
		System.out.println("Seu saldo é de R$ " + novaConta.saldo);
		System.out.println("");
		novaConta.saca(saque);
		System.out.println("Seu saldo é de R$ " + novaConta.saldo);
		
		rendimento = novaConta.calculaRendimento();
		System.out.println("");
		System.out.println("Seu saldo rendimento é de R$ " + rendimento + " e seu saldo total é de R$ " + novaConta.saldo);
	}
	
}
