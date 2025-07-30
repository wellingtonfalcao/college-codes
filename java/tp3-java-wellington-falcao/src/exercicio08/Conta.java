package exercicio08;

public class Conta {
	
	String titular, agencia, dataAbertura;
	int numero;
	double saldo;
	
	void saca(double valor) {
		if(saldo < 0 && valor <= saldo) {
			saldo = saldo - valor;
		} else {
			System.out.println("Saldo indisponível para este valor");
		}
		
	}
	
	void deposita(double valor) {
		saldo = saldo + valor;
	}


	double calculaRendimento() {
		return saldo * 0.1;
	}
}
