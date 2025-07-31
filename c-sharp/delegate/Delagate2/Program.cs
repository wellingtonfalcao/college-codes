namespace Delagate2 {
    internal class Program {
        static void Main(string[] args) {
            Func<double, double, double> calcularFunc = Somar;

            Console.WriteLine("Soma = " + calcularFunc(5, 2));

            calcularFunc = Subtrair;
            Console.WriteLine("Subtração = " + calcularFunc(5, 2));
        }

        public static double Somar(double op1, double op2) {
            return op1 + op2;
        }

        public static double Subtrair(double op1, double op2) {
            return op1 - op2;
        }
    }
}
