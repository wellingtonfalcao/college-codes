namespace Evento2.Models
{
    public class Conta
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Saldo { get; set; }

        public Conta(int Id, string Nome, double Saldo)
        {
            this.Id = Id;
            this.Nome = Nome;
            this.Saldo = Saldo;
        }
        //Agora com passagem de parametros para o tratador de eventos
        public event EventHandler<AlteracaoSaldoArgs> AlterarSaldo;
        public void Creditar(double valor)
        {
            Saldo += valor;
            string mensagem = $"Crédito de " + valor;
            AlterarSaldo?.Invoke(this, new AlteracaoSaldoArgs(mensagem));
        }

        public void Debitar(double valor)
        {
            Saldo -= valor;
            string mensagem = $"Debito de " + valor;
            AlterarSaldo?.Invoke(this, new AlteracaoSaldoArgs(mensagem));
            if (Saldo < 0) {
                mensagem = $"Saldo negativo: ";
                AlterarSaldo?.Invoke(this, new AlteracaoSaldoArgs(mensagem));
            }
        }

        public override string ToString()
        {
            return $"Id: {Id}, Nome: {Nome}, Saldo: {Saldo}";
        }

    }
    // Classe com herança de EventArgs para passar parametros
    public class AlteracaoSaldoArgs : EventArgs
    {
        public string Mensagem { get; set; }

        public AlteracaoSaldoArgs(string mensagem)
        {
            Mensagem = mensagem;
        }
    }
}
    
