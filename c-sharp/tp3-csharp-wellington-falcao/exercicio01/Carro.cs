namespace exercicio01
{
    internal class Carro //A class é o molde do objeto, onde definimos as propriedades e métodos que o objeto terá.
    {
        //Os atributos da classe iniciam com maiscula por conter getters e setters implicitos.
        public string Marca { get; set; } //Atributo da classe do tipo string com seus getters and setters
        public string Modelo { get; set; }
        public int Ano { get; set; } //Atributo da classe do tipo inteiro com seus getters and setters

        public Carro(string marca, string modelo, int ano)//Construtor para inicializar os atributos da classe Carro
        {
            Marca = marca;
            Modelo = modelo;
            Ano = ano;
        }

        public void MostrarCarro()// Método para exibir as informações do carro
        {
            Console.WriteLine($"Marca: {Marca}, Modelo: {Modelo}, Ano: {Ano}");
        }

        static void Main(string[] args)
        {
            Carro carro = new Carro("Ford", "Ka", 2003); //Instanciando de objeto baseado na classe Carro e passando os parâmetros necessários
            carro.MostrarCarro();
        }
    }
}
