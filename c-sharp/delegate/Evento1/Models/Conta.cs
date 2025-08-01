namespace Evento1.Models
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

        public event EventHandler AlterarSaldo;
        public void Creditar(double valor)
        {
            Saldo += valor;
            AlterarSaldo?.Invoke(this, EventArgs.Empty);
        }

        public void Debitar(double valor)
        {
            Saldo -= valor;
            AlterarSaldo?.Invoke(this, EventArgs.Empty);
        }

        public override string ToString()
        {
            return $"Id: {Id}, Nome: {Nome}, Saldo: {Saldo}";
        }
    }

}
    
