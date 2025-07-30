namespace exercicio11
{
    public class Esfera
    {
        public double Raio { get; set; }

        public double CalcularVolume() {
            return (3/4) * Math.PI * Math.Pow(Raio, 3);
        }
    }
}
