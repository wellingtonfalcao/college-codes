package br.infnet.edu.wellington_projeto_de_bloco_delivery.application;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.CepForaCoberturaException;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.PedidoNaoEncontradoException;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.LogisticaService;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.PedidoService;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class ConsoleApp implements CommandLineRunner {

    @Autowired
    private PedidoService pedidoService;

    @Autowired
    private LogisticaService logisticaService;

    private Scanner scanner = new Scanner(System.in);
    private List<Produto> produtos = new ArrayList<>();
    private int pedidoCounter = 1;
    private int itemPedidoCounter = 1;

    @Override
    public void run(String... args) throws Exception {
        inicializarDados();
        exibirMenuPrincipal();
    }

    private void inicializarDados() {
        // Produtos de exemplo
        Produto p1 = new Produto();
        p1.setId(1);
        p1.setNome("Pizza Margherita");
        p1.setDescricao("Pizza clássica com molho de tomate, mussarela e manjericão");
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
    }

    private void exibirMenuPrincipal() {
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
                    fazerPedido();
                    break;
                case 2:
                    verificarCep();
                    break;
                case 3:
                    listarPedidos();
                    break;
                case 4:
                    buscarPedidoPorId();
                    break;
                case 5:
                    atualizarStatusPedido();
                    break;
                case 6:
                    refazerPedido();
                    break;
                case 0:
                    System.out.println("Saindo do sistema...");
                    return;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }

    private void fazerPedido() {
        try {
            System.out.println("\n=== NOVO PEDIDO ===");

            // Solicitar CEP primeiro
            System.out.print("Digite o CEP para entrega (ex: 22000-000): ");
            String cep = scanner.nextLine();

            // Verificar CEP
            logisticaService.verificarCoberturaEntrega(cep);
            System.out.println("✓ CEP válido! Área de entrega coberta.");

            // Listar produtos disponíveis
            System.out.println("\nProdutos disponíveis:");
            for (Produto produto : produtos) {
                System.out.printf("%d - %s - R$ %.2f%n",
                        produto.getId(), produto.getNome(), produto.getPreco());
            }

            // Criar pedido
            Pedido pedido = new Pedido();
            pedido.setId(pedidoCounter++);
            pedido.setUsuarioId(1); // Usuário fixo para demonstração
            pedido.setCep(cep);
            pedido.setDataPedido(LocalDateTime.now());

            List<ItemPedido> itens = new ArrayList<>();

            // Adicionar itens
            boolean continuar = true;
            while (continuar) {
                System.out.print("\nDigite o ID do produto (0 para finalizar): ");
                int produtoId = scanner.nextInt();

                if (produtoId == 0) {
                    continuar = false;
                    continue;
                }

                System.out.print("Digite a quantidade: ");
                int quantidade = scanner.nextInt();
                scanner.nextLine(); // Limpar buffer

                Produto produtoSelecionado = produtos.stream()
                        .filter(p -> p.getId() == produtoId)
                        .findFirst()
                        .orElse(null);

                if (produtoSelecionado != null) {
                    ItemPedido item = new ItemPedido();
                    item.setId(itemPedidoCounter++);
                    item.setProdutoId(produtoId);
                    item.setQuantidade(quantidade);
                    item.setPrecoUnitario(produtoSelecionado.getPreco());
                    itens.add(item);

                    System.out.printf("✓ %d x %s adicionado(s)%n", quantidade, produtoSelecionado.getNome());
                } else {
                    System.out.println("Produto não encontrado!");
                }
            }

            if (itens.isEmpty()) {
                System.out.println("Nenhum item adicionado. Pedido cancelado.");
                return;
            }

            pedido.setItens(itens);

            // Criar pedido através do service
            Pedido pedidoCriado = pedidoService.criarPedido(pedido);

            System.out.println("\n✅ PEDIDO CRIADO COM SUCESSO!");
            System.out.printf("Número do pedido: %d%n", pedidoCriado.getId());
            System.out.printf("Código de protocolo: %s%n", pedidoCriado.getCodigoProtocolo());
            System.out.printf("Total: R$ %.2f%n", pedidoCriado.getPrecoTotal());
            System.out.printf("Status: %s%n", pedidoCriado.getStatus());

        } catch (CepForaCoberturaException e) {
            System.out.println("❌ ERRO: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Erro ao criar pedido: " + e.getMessage());
        }
    }

    private void verificarCep() {
        System.out.println("\n=== VERIFICAR CEP ===");
        System.out.print("Digite o CEP para verificação: ");
        String cep = scanner.nextLine();

        try {
            boolean valido = logisticaService.verificarCoberturaEntrega(cep);
            System.out.println("✅ CEP VÁLIDO! Área de entrega coberta.");
            System.out.println("CEP: " + cep);
        } catch (CepForaCoberturaException e) {
            System.out.println("❌ CEP FORA DA ÁREA DE COBERTURA: " + e.getMessage());
        }
    }

    private void listarPedidos() {
        try {
            System.out.println("\n=== LISTA DE PEDIDOS ===");
            List<Pedido> pedidos = pedidoService.listarTodosPedidos();

            if (pedidos.isEmpty()) {
                System.out.println("Nenhum pedido encontrado.");
                return;
            }

            for (Pedido pedido : pedidos) {
                System.out.printf("Pedido #%d - Protocolo: %s%n", pedido.getId(), pedido.getCodigoProtocolo());
                System.out.printf("Status: %s - Total: R$ %.2f%n", pedido.getStatus(), pedido.getPrecoTotal());
                System.out.printf("Data: %s - CEP: %s%n", pedido.getDataPedido(), pedido.getCep());
                System.out.println("Itens:");

                for (ItemPedido item : pedido.getItens()) {
                    System.out.printf("  - Produto %d: %d x R$ %.2f = R$ %.2f%n",
                            item.getProdutoId(), item.getQuantidade(),
                            item.getPrecoUnitario(), item.getSubtotal());
                }
                System.out.println("---");
            }

        } catch (Exception e) {
            System.out.println("❌ Erro ao listar pedidos: " + e.getMessage());
        }
    }

    private void buscarPedidoPorId() {
        System.out.println("\n=== BUSCAR PEDIDO ===");
        System.out.print("Digite o ID do pedido: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer

        try {
            Pedido pedido = pedidoService.buscarPedidoPorId(id);

            System.out.printf("✅ PEDIDO ENCONTRADO #%d%n", pedido.getId());
            System.out.printf("Protocolo: %s%n", pedido.getCodigoProtocolo());
            System.out.printf("Status: %s%n", pedido.getStatus());
            System.out.printf("Total: R$ %.2f%n", pedido.getPrecoTotal());
            System.out.printf("Data: %s%n", pedido.getDataPedido());
            System.out.printf("CEP: %s%n", pedido.getCep());
            System.out.println("Itens:");

            for (ItemPedido item : pedido.getItens()) {
                System.out.printf("  - Produto %d: %d x R$ %.2f = R$ %.2f%n",
                        item.getProdutoId(), item.getQuantidade(),
                        item.getPrecoUnitario(), item.getSubtotal());
            }

        } catch (PedidoNaoEncontradoException e) {
            System.out.println("❌ " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Erro ao buscar pedido: " + e.getMessage());
        }
    }

    private void atualizarStatusPedido() {
        System.out.println("\n=== ATUALIZAR STATUS ===");
        System.out.print("Digite o ID do pedido: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer

        System.out.println("Status disponíveis:");
        StatusPedido[] statuses = StatusPedido.values();
        for (int i = 0; i < statuses.length; i++) {
            System.out.printf("%d - %s%n", i + 1, statuses[i]);
        }

        System.out.print("Escolha o novo status: ");
        int escolha = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer

        if (escolha < 1 || escolha > statuses.length) {
            System.out.println("Opção inválida!");
            return;
        }

        StatusPedido novoStatus = statuses[escolha - 1];

        try {
            Pedido pedidoAtualizado = pedidoService.atualizarStatus(id, novoStatus);
            System.out.printf("✅ Status do pedido #%d atualizado para: %s%n",
                    pedidoAtualizado.getId(), pedidoAtualizado.getStatus());

        } catch (Exception e) {
            System.out.println("❌ Erro ao atualizar status: " + e.getMessage());
        }
    }

    private void refazerPedido() {
        System.out.println("\n=== REFAZER PEDIDO ===");
        System.out.print("Digite o ID do pedido que deseja refazer: ");
        int idAntigo = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer

        try {
            Pedido novoPedido = pedidoService.refazerPedido(idAntigo);
            System.out.println("✅ PEDIDO REFEITO COM SUCESSO!");
            System.out.printf("Novo pedido #%d criado%n", novoPedido.getId());
            System.out.printf("Código de protocolo: %s%n", novoPedido.getCodigoProtocolo());
            System.out.printf("Total: R$ %.2f%n", novoPedido.getPrecoTotal());

        } catch (PedidoNaoEncontradoException e) {
            System.out.println("❌ " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Erro ao refazer pedido: " + e.getMessage());
        }
    }
}