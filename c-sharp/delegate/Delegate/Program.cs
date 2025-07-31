namespace Delegate {
    internal class Program {
        static void Main(string[] args) {
            // Delegate é uma variável que aponta para um método

            Calcular calcular;
            calcular = Somar;
            Console.WriteLine("Soma = " + calcular(5, 2));
            calcular = Subtrair;
            Console.WriteLine("Subtração = " + calcular(5, 2));
            calcular = Multiplicar;
            Console.WriteLine("Multiplicação = " + calcular(5, 2));
            calcular = Dividir;
            Console.WriteLine("Divisão = " + calcular(5, 2));
        }

        public delegate double Calcular(double op1, double op2);

        public static double Somar(double op1, double op2) {
            return op1 + op2;
        }

        public static double Subtrair(double op1, double op2) {
            return op1 - op2;
        }

        public static double Multiplicar(double op1, double op2) {
            return op1 * op2;
        }

        public static double Dividir(double op1, double op2) {
            return op1 / op2;
        }
    }
}
