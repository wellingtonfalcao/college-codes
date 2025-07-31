namespace Delegate5 {
    internal class Program {
        static void Main(string[] args) {
            // Delegate com Action e Lambda

            // Lambda statement
            var somar1 = (double op1, double op2) => {
                double result = op1 + op2;
                Console.WriteLine("Soma = " + result);
            };

            somar1(5, 2);
            Console.WriteLine();

            Action<double, double> calcularAction = somar2;
            somar2(5, 2);
        }

        // Action delegate com Lambda statement
        public static Action<double, double> somar2 = (op1, op2) => {
            double result = op1 + op2;
            Console.WriteLine("Soma = " + result);
        };
    }
}
