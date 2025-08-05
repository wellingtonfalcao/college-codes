package br.edu.infnet.apiwellington.csv;

import br.edu.infnet.apiwellington.model.Usuario;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MainLogin {

    private static final String DIRETORIO_CSV = "src/main/java/br/edu/infnet/apiwellington/csv/usuarios.csv";
    private static final String CABECALHO_CSV = "id,login,senha,email";
    private static final String MENU_OPCOES = "\nMenu:\n1 - Adicionar novo usuário\n2 - Listar todos os usuários" +
            "\n3 - Salvar e sair\nEscolha uma opção: \n";
    private static final String MSG_ERRO = "Arquivo não encontrado.\nForneça o arquivo no padrão de cabeçalho: " +
            "\"%s\"\nno diretório: %s\nCaso contrário será gerado um novo.\n".formatted(CABECALHO_CSV, DIRETORIO_CSV);

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        List<Usuario> usuarios = new ArrayList<>();

        //Verificar CSV
        try {
            usuarios = lerUsuariosDoCSV();
        } catch (IOException e) {
            System.out.printf(MSG_ERRO);
        }

        // Menu de opções
        int opcao;
        do {
            System.out.print(MENU_OPCOES);
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    adicionarUsuario(scanner, usuarios);
                    break;
                case 2:
                    listarUsuarios(usuarios);
                    break;
                case 3:
                    salvarUsuariosNoCSV(usuarios);
                    System.out.println("Dados salvos com sucesso!");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
        } while (opcao != 3);

        scanner.close();
    }

    //Metodo para adicionar usuário
    private static void adicionarUsuario(Scanner scanner, List<Usuario> usuarios) {
        System.out.println("\nAdicionar novo usuário:");

        System.out.print("ID: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Limpar o buffer

        System.out.print("Login: ");
        String login = scanner.nextLine();

        System.out.print("Senha: ");
        String senha = scanner.nextLine();

        System.out.print("Email: ");
        String email = scanner.nextLine();

        // Instancia de novoUsuario
        Usuario novoUsuario = new Usuario(id, login, senha, email);
        usuarios.add(novoUsuario);

        System.out.println("Usuário adicionado com sucesso!");
    }


    private static void listarUsuarios(List<Usuario> usuarios) {
        System.out.println("\nLista de Usuários:");
        if (usuarios.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
        } else {
            for (Usuario usuario : usuarios) {
                System.out.println("ID: " + usuario.getId() +
                        ", Login: " + usuario.getLogin() +
                        ", Email: " + usuario.getEmail());
            }
        }
    }


    private static List<Usuario> lerUsuariosDoCSV() throws IOException {
        List<Usuario> usuarios_lidos = new ArrayList<>();
        List<String> linhas = Files.readAllLines(Paths.get(DIRETORIO_CSV));

        // Pular o cabeçalho se existir
        for (int i = 1; i < linhas.size(); i++) {
            String[] dados = linhas.get(i).split(",");
            if (dados.length == 4) {
                int id = Integer.parseInt(dados[0]);
                String login = dados[1];
                String senha = dados[2];
                String email = dados[3];
                usuarios_lidos.add(new Usuario(id, login, senha, email));
            }
        }
        return usuarios_lidos;
    }

    private static void salvarUsuariosNoCSV(List<Usuario> usuarios) {
        try (FileWriter escrita = new FileWriter(DIRETORIO_CSV)) {
            escrita.write(CABECALHO_CSV + "\n");
            for (Usuario usuario : usuarios) {
                escrita.write(usuario.toString() + "\n");
            }
        } catch (IOException e) {
            System.err.println("Erro ao salvar o arquivo: " + e.getMessage());
        }
    }
}