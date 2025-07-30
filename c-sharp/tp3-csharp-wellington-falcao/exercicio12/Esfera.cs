namespace exercicio12
{
    public class Esfera
    {
        public double Raio { get; set; }

        public Esfera(double raio)
        {
            Raio = raio;
        }

        public double CalcularVolume()
        {
            return (3.0/4.0) * (Math.PI * Math.Pow(Raio, 3));
        }
    }
}
