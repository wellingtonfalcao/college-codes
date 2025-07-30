using System;
using System.Collections.Generic;
using System.IO;
using Exercicio12.models;

namespace Exercicio12
{
    public class Program
    {
        static string arquivo = "E:\\Projetos\\c#\\wellington_falcao_dr2-at\\Exercicio12\\arquivo\\contatos.txt";

        public static void Main(string[] args)
        {
            string opcao;

            do
            {
                ExibirMenu();
                opcao = Console.ReadLine();
                Console.WriteLine();

                switch (opcao)
                {
                    case "1":
                        AdicionarContato();
                        break;
                    case "2":

                        // Lê os contatos do arquivo e verifica se está vazio
                        List<Contato> contatos = LerContatos();
                        if (contatos.Count == 0)
                        {
                            Console.WriteLine("Nenhum contato cadastrado.\n");
                            break;
                        }
                        ContatoFormatter formatter = EscolherFormatter();

                        // Exibe os contatos no formato escolhido no método EscolherFormatter()
                        formatter.ExibirContatos(contatos);
                        break;
                    case "3":
                        Console.WriteLine("Programa encerrado pelo usuário.");
                        break;
                    default:
                        Console.WriteLine("Opção inválida. Tente novamente.\n");
                        break;
                }
            } while (opcao != "3");
        }

        //Método que exibe o manu de opções
        private static void ExibirMenu()
        {
            Console.WriteLine("***** Gerenciador de Contatos *****\n");
            Console.WriteLine("1 - Adicionar novo contato");
            Console.WriteLine("2 - Listar contatos cadastrados");
            Console.WriteLine("3 - Sair\n");
            Console.Write("Escolha uma opção: ");
        }

        // Método que adiciona um novo contato e salva no arquivo com tratamento de exceções
        private static void AdicionarContato()
        {
            Console.Write("Nome: ");
            string nome = Console.ReadLine();
            Console.Write("Telefone: ");
            string telefone = Console.ReadLine();
            Console.Write("Email: ");
            string email = Console.ReadLine();

            try
            {   
                using (StreamWriter writer = File.AppendText(arquivo))
                {
                    writer.WriteLine($"{nome},{telefone},{email}");
                }
                Console.WriteLine("\nContato cadastrado com sucesso!\n");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao salvar contato: {ex.Message}\n");
            }
        }

        // Método que lê os contatos do arquivo e retorna uma lista de objetos Contato
        private static List<Contato> LerContatos()
        {
            List<Contato> contatos = new List<Contato>();
            string[] linhas;

            try
            {   // Verifica se o arquivo existe antes de tentar ler
                if (!File.Exists(arquivo)) {
                    return contatos;
                } 

                linhas = File.ReadAllLines(arquivo);

                // Percorre cada linha do arquivo, divide em partes e cria um objeto Contato
                foreach (string linha in linhas)
                {
                    string[] partes = linha.Split(',');
                    if (partes.Length == 3)
                        contatos.Add(new Contato(partes[0], partes[1], partes[2]));
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao ler contatos: {ex.Message}\n");
            }

            return contatos;
        }

        // Método que escolhe o formato de exibição dos contatos
        private static ContatoFormatter EscolherFormatter()
        {
            string escolhaFormato;

            Console.WriteLine("Escolha o formato de exibição:");
            Console.WriteLine("1 - Markdown\n2 - Tabela\n3 - Texto Puro");
            Console.Write("Opção: ");
            escolhaFormato = Console.ReadLine();
            Console.WriteLine();

            ContatoFormatter formatter;

            switch (escolhaFormato)
            {
                case "1":
                    formatter = new MarkdownFormatter();
                    break;
                case "2":
                    formatter = new TabelaFormatter();
                    break;
                default:
                    formatter = new TextoPuroFormatter();
                    break;
            }

            return formatter;
        }
    }
}
