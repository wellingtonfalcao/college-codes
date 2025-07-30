using System;

namespace Exercício09
{
    public class Produto
    {   
        
        //Atributos de array
        public string[] opcoes = { "1 - Adicionar Produto", "2 - Listar Produtos", "3 - Sair" };
        public string[] nomeProduto = new string[5];
        public int[] estoque = new int[5];
        public double[] preco = new double[5];
        public string caminhoArquivo = "E:\\Projetos\\c#\\wellington_falcao_dr2-at\\Exercício09\\arquivo\\produtos.txt";

        //Atributo do contador 
        int contador = 0;


        // Método que inicia o programa
        public void Iniciar()
        {
            while (true)
            {
                ExibirMenu();
                string selecionado = Console.ReadLine();

                switch (selecionado)
                {
                    case "1":
                        InserirProduto();
                        break;
                    case "2":
                        ListarProdutos();
                        break;
                    case "3":
                        Console.WriteLine("Programa encerrado pelo usuário");
                        return;
                    default:
                        Console.WriteLine("Opção inválida. Tente novamente.\n");
                        break;
                }
            }
        }

        // Método que exibe o menu de opções
        public void ExibirMenu()
        {
            Console.WriteLine("\nMenu de Opções:");
            foreach (var opcao in opcoes)
            {
                Console.WriteLine(opcao);
            }
            Console.Write("\nEscolha uma opção: ");
        }


        // Método para inserir um novo produto
        public void InserirProduto()
        {
            if (contador >= nomeProduto.Length)
            {
                Console.WriteLine("Limite de produtos atingido. Não é possível adicionar mais.");
                return;
            }

            Console.Clear();
            Console.WriteLine($"Produto {contador + 1}\n");

            Console.Write("Nome do produto: ");
            nomeProduto[contador] = Console.ReadLine();

            Console.Write("Quantidade: ");
            if (!int.TryParse(Console.ReadLine(), out estoque[contador]))
            {
                Console.WriteLine("Quantidade inválida. Produto não adicionado.");
                return;
            }

            Console.Write("Preço: ");
            if (!double.TryParse(Console.ReadLine(), out preco[contador]))
            {
                Console.WriteLine("Preço inválido. Produto não adicionado.");
                return;
            }

            contador++;
            Console.WriteLine("Produto adicionado com sucesso!\n");

            //B) Persistência com Arquivos - Faz um try catch para salvar os dados no arquivo com SteramWriter e File.AppendText
            try
            {
                using (StreamWriter writer = File.AppendText(caminhoArquivo))
                {
                    writer.WriteLine($"{nomeProduto[contador - 1]},{estoque[contador - 1]},{preco[contador - 1]:F2}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao salvar produto no arquivo: {ex.Message}");
            }
        }

        // Método para listar os produtos cadastrados
        public void ListarProdutos()
        {
            string[] linhas;

            Console.Clear();
            Console.WriteLine("Lista de Produtos:\n");

            
            try
            {
                // Verifica se o arquivo existe e se está vazio
                if (!File.Exists(caminhoArquivo))
                {
                    Console.WriteLine("Nenhum produto cadastrado.\n");
                    return;
                }

                // Lê todas as linhas do arquivo
                linhas = File.ReadAllLines(caminhoArquivo);

                // Verifica se o arquivo está vazio
                if (linhas.Length == 0)
                {
                    Console.WriteLine("Nenhum produto cadastrado.\n");
                    return;
                }

                // Percorre as linhas do arquivo e exibe os dados dos produtos
                for (int i = 0; i < linhas.Length; i++)
                {
                    string[] dados = linhas[i].Split(',');
                    if (dados.Length == 3)
                    {
                        Console.WriteLine($"Produto {i + 1}: {dados[0]} | Quantidade: {dados[1]} | Preço: R$ {dados[2]}");
                    }
                    else
                    {
                        Console.WriteLine($"Produto {i + 1}: Dados corrompidos.");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao ler arquivo: {ex.Message}");
            }
        }
    }
}