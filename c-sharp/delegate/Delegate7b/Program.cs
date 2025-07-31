namespace Delegate7b {
    internal class Program {
        static void Main(string[] args) {
            // Implementar Multicast Delegate com Action e objeto

            Calcula calcula = new Calcula();
            Action<double, double> calcularActionMulticast = calcula.Somar;
            calcularActionMulticast += calcula.Subtrair;
            calcularActionMulticast += calcula.Multiplicar;
            calcularActionMulticast += calcula.Dividir;
            calcularActionMulticast(3, 2);
            Console.WriteLine();
        }
    }
}
