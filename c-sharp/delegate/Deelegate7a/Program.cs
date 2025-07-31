namespace Deelegate7a {
    internal class Program {
        static void Main(string[] args) {
            // Multicast Delegate com Action permite executar vários métodos em FIFO
            // Todas as assinaturas dos métodos devem ser iguais

            //Action<double, double> calcularAction = new Action<double, double>(Somar);
            Action<double, double> calcularActionMulticast = Somar;
            //CalcularActionMulticast calcularActionMulticast;
            calcularActionMulticast += Subtrair;
            calcularActionMulticast += Multiplicar;
            calcularActionMulticast += Dividir;
            calcularActionMulticast(3, 2);
            Console.WriteLine();
        }

        public static void Somar(double op1, double op2) {
            double result = op1 + op2;
            Console.WriteLine("Soma = " + result);
        }

        public static void Subtrair(double op1, double op2) {
            double result = op1 - op2;
            Console.WriteLine("Subtração = " + result);
        }

        public static void Multiplicar(double op1, double op2) {
            double result = op1 * op2;
            Console.WriteLine("Multiplicação = " + result);
        }

        public static void Dividir(double op1, double op2) {
            double result = op1 / op2;
            Console.WriteLine("Divisão = " + result);
        }
    }
}
