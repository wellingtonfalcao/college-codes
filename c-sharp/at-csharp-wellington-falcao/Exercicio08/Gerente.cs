namespace Exercicio08
{
    public class Gerente : Funcionario
        
    {

        // Construtor padrão
        public Gerente() { }

        // Construtor da classe Gerente que herda de Funcionario e aplica um aumento de 20% no salário base
        public Gerente(string nome, string cargo, double salarioBase)
            : base(nome, cargo, salarioBase * 1.2)
        {        
        }

        // Método para exibir os dados do gerente, sobrescrevendo o método da superclasse Funcionario
        public override void ExibirSalario()
        {
            base.ExibirSalario();
        }
    }
}
