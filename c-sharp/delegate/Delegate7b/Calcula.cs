namespace Delegate7b {
    public class Calcula {
        public void Somar(double op1, double op2) {
            double result = op1 + op2;
            Console.WriteLine("Soma = " + result);
        }

        public void Subtrair(double op1, double op2) {
            double result = op1 - op2;
            Console.WriteLine("Subtração = " + result);
        }

        public void Multiplicar(double op1, double op2) {
            double result = op1 * op2;
            Console.WriteLine("Multiplicação = " + result);
        }

        public void Dividir(double op1, double op2) {
            double result = op1 / op2;
            Console.WriteLine("Divisão = " + result);
        }
    }
}
