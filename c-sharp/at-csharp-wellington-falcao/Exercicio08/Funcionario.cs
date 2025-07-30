namespace Exercicio08
{
    // Classe mãe ou superclasse Funcionario
    public class Funcionario
    {
        //Atributos da classe Funcionario, salario está privado
        string nome, cargo;
        protected double SalarioBase;

        // Construtor padrão
        public Funcionario() { }

        // Construtor da classe Funcionario
        public Funcionario(string nome, string cargo, double salarioBase)
        {
            this.nome = nome;
            this.cargo = cargo;
            this.SalarioBase = salarioBase;
        }

        // Método para exibir os dados do funcionário com virtual que permite sobrescrita na subclasse
        public virtual void ExibirSalario() {
            Console.WriteLine($"Nome: {nome}\nCargo: {cargo}\nSalário Base: R$ {SalarioBase.ToString("C", new System.Globalization.CultureInfo("pt-BR"))}\n");
        }
}
}
