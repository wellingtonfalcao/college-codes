using System;
using System.IO;

namespace Exercicio11
{
    public class Program
    {
        static string arquivo = "E:\\Projetos\\c#\\wellington_falcao_dr2-at\\Exercicio11\\arquivo\\contatos.txt";
        public static string opcao, nome, email, telefone;

        public static void Main(string[] args)
        {
            do
            {
                ExibirMenu();
                opcao = Console.ReadLine();

                switch (opcao)
                {
                    case "1":
                        AdicionarContato();
                        break;
                    case "2":
                        ListarContatos();
                        break;
                    case "3":
                        Console.WriteLine("Encerrando programa...");
                        break;
                    default:
                        Console.WriteLine("Opção inválida. Tente novamente.");
                        break;
                }

                Console.WriteLine();

            } while (opcao != "3");
        }
        //Método que exibe o manu de opções
        static void ExibirMenu()
        {
            Console.WriteLine("***** Gerenciador de Contatos *****\n");
            Console.WriteLine("1 - Adicionar novo contato");
            Console.WriteLine("2 - Listar contatos cadastrados");
            Console.WriteLine("3 - Sair\n");
            Console.Write("Escolha uma opção: ");
        }

        //Método que adiciona um novo contato
        static void AdicionarContato()
        {
            Console.Write("Nome: ");
            nome = Console.ReadLine();

            Console.Write("Telefone: ");
            telefone = Console.ReadLine();

            Console.Write("Email: ");
            email = Console.ReadLine();

            try
            {
                using (StreamWriter writer = File.AppendText(arquivo))
                {
                    writer.WriteLine($"{nome},{telefone},{email}");
                }

                Console.WriteLine("\nContato cadastrado com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao salvar contato: {ex.Message}");
            }
        }
        // Método que lista os contatos cadastrados salvos no arquivo
        static void ListarContatos()
        {
            Console.WriteLine("\nContatos cadastrados:\n");
            Console.WriteLine("****************************************\n");

            //Tratamento de exceção para verificar se o arquivo existe e se está corrompido
            try
            {
                if (!File.Exists(arquivo))
                {
                    Console.WriteLine("Nenhum contato cadastrado.");
                    return;
                }

                string[] linhas = File.ReadAllLines(arquivo);

                if (linhas.Length == 0)
                {
                    Console.WriteLine("Nenhum contato cadastrado.");
                    return;
                }

                foreach (string linha in linhas)
                {
                    string[] dadosContato = linha.Split(',');
                    // Verifico se o arquivo não foi alterado ou está corrompido
                    if (dadosContato.Length == 3)
                    {
                        Console.WriteLine($"Nome: {dadosContato[0]} | Telefone: {dadosContato[1]} | Email: {dadosContato[2]}");
                    }
                    else
                    {
                        Console.WriteLine("Contato corrompido no arquivo.");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao ler contatos: {ex.Message}");
            }
        }
    }
}

