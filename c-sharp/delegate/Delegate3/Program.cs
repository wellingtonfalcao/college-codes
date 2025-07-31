namespace Delegate3 {
    internal class Program {
        static void Main(string[] args) {
            Action<double, double> calcularAction = Somar;

            calcularAction(5, 2);
            calcularAction = Subtrair;
            calcularAction(5, 3);
        }

        public static void Somar(double op1, double op2) { 
            double result = op1 + op2;
            Console.WriteLine("Soma = " + result);
        }

        public static void Subtrair(double op1, double op2) {
            double result = op1 - op2;
            Console.WriteLine("Subtração = " + result);
        }
    }
}
