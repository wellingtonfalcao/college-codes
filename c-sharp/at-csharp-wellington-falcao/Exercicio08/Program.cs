namespace Exercicio08
{
    public class Program
    {
        static void Main(string[] args)
        {
            //Instanciando objetos através da superclasse Funcionário, subclasse Gerente e exibindo os respectivos salários
            Funcionario funcionario = new Funcionario("Wellington", "Engenheiro de Computação", 8000.00);
            funcionario.ExibirSalario();

            Gerente gerente = new Gerente("Alberto Roberto","Gerente de Projetos",12000.45);
            gerente.ExibirSalario();

        }
    }
}
