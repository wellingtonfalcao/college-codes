namespace Delegate6 {
    internal class Program {
        static void Main(string[] args) {
            int[] vet = { 2, 3, 4 };
            int[] vetResult;

            ExibirVetor(vet);
            vetResult = ElevarQuadrado(vet);
            ExibirVetor(vetResult);
            ExibirVetor(vet);
            vetResult = ElevarCubo(vet);
            ExibirVetor(vetResult);
        }

        public static int[] ElevarQuadrado(int[] vet) {
            int[] vetResult = new int[vet.Length];

            for (int i = 0; i < vet.Length; i++) {
                vetResult[i] = vet[i] * vet[i];
            }
            return vetResult;
        }

        public static int[] ElevarCubo(int[] vet) {
            int[] vetResult = new int[vet.Length];

            for (int i = 0; i < vet.Length; i++) {
                vetResult[i] = vet[i] * vet[i] * vet[i];
            }
            return vetResult;
        }

        public static void ExibirVetor(int[] vet) {

            for (int i = 0; i < vet.Length;i++) {
                Console.Write(vet[i] + " ");
            }
            Console.WriteLine();
        }
    }
}
