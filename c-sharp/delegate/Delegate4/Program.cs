namespace Delegate4 {
    internal class Program {
        static void Main(string[] args) {
            // Delagate com Func e Lambda

            // Lambda Statement
            var somar1 = (double op1, double op2) => {
                double result = op1 + op2;
                return result;
            };

            Console.WriteLine("Soma = " + somar1(5, 2));
            Console.WriteLine();

            Func<double, double, double> calcularFunc = somar2;
            Console.WriteLine("Soma = " + somar2(5, 2));
            Console.WriteLine();

            calcularFunc = somar3;
            Console.WriteLine("Soma = " + somar3(5, 2));
        }

        // Func delegate com lambda statement
        public static Func<double, double, double> somar2 = (op1, op2) => {
            double result = op1 + op2;
            return result;
        };

        // Func delegate com lambda expressiom
        public static Func<double, double, double> somar3 = (op1, op2) => op1 + op2;
    }
}
