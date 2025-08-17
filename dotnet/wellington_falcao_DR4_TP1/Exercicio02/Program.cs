using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== Mensagens Multilíngues com Action<string> ===");
        Console.Write("Digite seu nome: ");
        string nome = Console.ReadLine();

        Console.Write("\nEscolha o idioma para a saudação:" +
            "\n1 - Português" +
            "\n2 - English" +
            "\n3 - Español" + 
            "\nOpção: ");

        Action<string> saudacao = SelecionarIdioma(Console.ReadLine());
        
        saudacao(nome);
    }

    private static Action<string> SelecionarIdioma(string opcao)
    {
        Action<string> saudacaoPortugues = (n) =>
            Console.WriteLine($"\nOlá, {n}! Seja bem-vindo à nossa plataforma SaaS!");

        Action<string> saudacaoIngles = (n) =>
            Console.WriteLine($"\nHello, {n}! Welcome to our SaaS platform!");

        Action<string> saudacaoEspanhol = (n) =>
            Console.WriteLine($"\n¡Hola, {n}! ¡Bienvenido a nuestra plataforma SaaS!");

        switch (opcao)
        {
            case "1": return saudacaoPortugues;
            case "2": return saudacaoIngles;
            case "3": return saudacaoEspanhol;
            default:
                Console.WriteLine("Idioma não reconhecido. Usando português como padrão.");
                return saudacaoPortugues;
        }
    }
}