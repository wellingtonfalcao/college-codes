namespace Delegate6b {
    internal class Program {
        static void Main(string[] args) {
            int[] vet = { 2, 3, 4 };
            int[] vetResult;

            ExibirVetor(vet);
            vetResult = AlterarVetor(vet, Quadrado);
            ExibirVetor(vetResult);
            ExibirVetor(vet);
            vetResult = AlterarVetor(vet, Cubo);
            ExibirVetor(vetResult);
        }

        public delegate int AlterarNumero(int num);

        public static int[] AlterarVetor(int[] vet, AlterarNumero alterar) {
            int[] vetResult = new int[vet.Length];

            for (int i = 0; i < vet.Length; i++) {
                vetResult[i] = alterar(vet[i]);
            }
            return vetResult;
        }

        public static int Quadrado(int num) {
            return num * num;
        }

        public static int Cubo(int num) {
            return num * num * num;
        }

        public static void ExibirVetor(int[] vet) {

            for (int i = 0; i < vet.Length; i++) {
                Console.Write(vet[i] + " ");
            }
            Console.WriteLine();
        }
    }
}
