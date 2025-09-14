package br.infnet.edu.wellington_projeto_de_bloco_delivery.application;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class MenuHandler {

    @Autowired
    private PedidoHandler pedidoHandler;

    @Autowired
    private CepHandler cepHandler;

    private Scanner scanner = new Scanner(System.in);
    private List<Produto> produtos = new ArrayList<>();

    public void inicializarDados() {
        Produto p1 = new Produto();
        p1.setId(1);
        p1.setNome("Pizza Marguerita");
        p1.setDescricao("Pizza clássica com molho de tomate, muçarela e manjericão");
        p1.setPreco(45.90);
        p1.setCategoriaId(1);

        Produto p2 = new Produto();
        p2.setId(2);
        p2.setNome("Hambúrguer Artesanal");
        p2.setDescricao("Hambúrguer 180g com queijo, bacon e molho especial");
        p2.setPreco(32.50);
        p2.setCategoriaId(2);

        Produto p3 = new Produto();
        p3.setId(3);
        p3.setNome("Sushi Combinado");
        p3.setDescricao("Combinado de sushi com 20 peças variadas");
        p3.setPreco(89.90);
        p3.setCategoriaId(3);

        produtos.add(p1);
        produtos.add(p2);
        produtos.add(p3);

        pedidoHandler.setProdutos(produtos);
    }

    public void exibirMenuPrincipal() {
        while (true) {
            System.out.println("\n=== SISTEMA DE DELIVERY ===");
            System.out.println("1. Fazer pedido");
            System.out.println("2. Verificar CEP");
            System.out.println("3. Listar pedidos");
            System.out.println("4. Buscar pedido por ID");
            System.out.println("5. Atualizar status do pedido");
            System.out.println("6. Refazer pedido");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");

            int opcao = scanner.nextInt();
            scanner.nextLine(); // Limpar buffer

            switch (opcao) {
                case 1:
                    pedidoHandler.fazerPedido();
                    break;
                case 2:
                    cepHandler.verificarCep();
                    break;
                case 3:
                    pedidoHandler.listarPedidos();
                    break;
                case 4:
                    pedidoHandler.buscarPedidoPorId();
                    break;
                case 5:
                    pedidoHandler.atualizarStatusPedido();
                    break;
                case 6:
                    pedidoHandler.refazerPedido();
                    break;
                case 0:
                    System.out.println("Saindo do sistema...");
                    return;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }

    public Scanner getScanner() {
        return scanner;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }
}
