package exercicio09;

public class Conta {
	
	String titular, agencia, dataAbertura;
	int numero;
	double saldo;

	
	void saca(double valor) {
		if (valor > 0 && valor <= saldo) {
			saldo = saldo - valor;
			System.out.println("Saque de: " + valor + " realizado com sucesso!");
		} else {
			System.out.println("Saldo indisponível para este valor");
		}
		
	}
	
	void deposita(double valor) {
		saldo = saldo + valor;
		System.out.println("Deposito de: " + valor + " realizado com sucesso!");
	}


	double calculaRendimento() {
		return saldo * 0.1;
	}
}
