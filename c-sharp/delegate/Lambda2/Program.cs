namespace Lambda2 {
    internal class Program {
        static void Main(string[] args) {
            // Lambda expression
            var somar1 = (double op1, double op2) => op1 + op2;
            Console.WriteLine("Soma = " + somar1(5, 2));
            Console.WriteLine();

            // Lambda statement
            var somar2 = (double op1, double op2) => {
                double result = op1 + op2;
                result = result * result;
                return result;
            };
            Console.WriteLine("Soma = " + somar2(5, 2));
        }
    }
}
