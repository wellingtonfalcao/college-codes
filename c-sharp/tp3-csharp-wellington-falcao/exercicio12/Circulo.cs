namespace exercicio12
{
    public class Circulo
    {
        public double Raio { get; set; }

        public Circulo(double raio)
        {
            Raio = raio;
        }
        public double CalcularArea()
        {
            return Math.PI * Math.Pow(Raio, 2);
        }
    }
}
