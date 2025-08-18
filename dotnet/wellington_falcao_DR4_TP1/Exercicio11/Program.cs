using System;

namespace Exercicio11
{
    class Program
    {
        static void Main()
        {
            Func<string, string, string> processador;

            processador = Concatenar;

            processador += ParaMaiusculas;
            processador += RemoverEspacos;

            string resultado = processador("Wellington", " Falcão ");

            Console.WriteLine($"Resultado final: '{resultado}'");
        }

        static string Concatenar(string nome, string sobrenome)
        {
            string resultado = nome + " " + sobrenome;
            Console.WriteLine($"[Concatenar] => '{resultado}'");
            return resultado;
        }

        static string ParaMaiusculas(string nome, string sobrenome)
        {
            string resultado = (nome + sobrenome).ToUpper();
            Console.WriteLine($"[ParaMaiusculas] => '{resultado}'");
            return resultado;
        }

        static string RemoverEspacos(string nome, string sobrenome)
        {
            string resultado = (nome + sobrenome).Replace(" ", "");
            Console.WriteLine($"[RemoverEspaços] => '{resultado}'");
            return resultado;
        }
    }
}
