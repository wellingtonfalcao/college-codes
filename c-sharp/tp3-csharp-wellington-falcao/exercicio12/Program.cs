namespace exercicio12
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Esfera esfera = new(10); //Utilizei construtores e forma compacta para instanciar.
            Circulo circulo = new(10);

            Console.WriteLine($"Volume da esfera: {esfera.CalcularVolume()}");
            Console.WriteLine($"Área do círculo: {circulo.CalcularArea()}");
        }
    }
}
