package br.infnet.edu.wellington_projeto_de_bloco_delivery.console;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.*;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.LogisticaService;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.CepForaCoberturaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;
import java.time.LocalDateTime;

@Component
public class DeliveryConsole {

    private final Scanner scanner;

    @Autowired
    private LogisticaService logisticaService;

    private List<Produto> catalogoProdutos;
    private List<Usuario> usuarios;
    private Usuario usuarioLogado;

    public DeliveryConsole() {
        this.scanner = new Scanner(System.in);
        this.catalogoProdutos = inicializarCatalogo();
        this.usuarios = inicializarUsuarios();
        this.usuarioLogado = null;
    }

    public void iniciar() {
        System.out.println("=== SISTEMA DE DELIVERY ===");

        while (true) {
            if (usuarioLogado == null) {
                menuLogin();
            } else {
                menuPrincipal();
            }
        }
    }

    private void menuLogin() {
        System.out.println("\n=== LOGIN ===");
        System.out.println("1. Fazer login");
        System.out.println("2. Sair");
        System.out.print("Escolha uma opção: ");

        int opcao = scanner.nextInt();
        scanner.nextLine();

        switch (opcao) {
            case 1:
                fazerLogin();
                break;
            case 2:
                System.out.println("Saindo do sistema...");
                System.exit(0);
                break;
            default:
                System.out.println("Opção inválida!");
        }
    }

    private void fazerLogin() {
        System.out.print("Digite seu login: ");
        String login = scanner.nextLine();
        System.out.print("Digite sua senha: ");
        String senha = scanner.nextLine();

        Optional<Usuario> usuario = usuarios.stream()
                .filter(u -> u.getLogin().equals(login) && u.getSenha().equals(senha))
                .findFirst();

        if (usuario.isPresent()) {
            usuarioLogado = usuario.get();
            System.out.println("Login realizado com sucesso! Bem-vindo, " + usuarioLogado.getLogin());
        } else {
            System.out.println("Login ou senha inválidos!");
        }
    }

    private void menuPrincipal() {
        System.out.println("\n=== MENU PRINCIPAL ===");
        System.out.println("1. Fazer pedido");
        System.out.println("2. Ver meus pedidos");
        System.out.println("3. Refazer pedido");
        System.out.println("4. Ver catálogo");
        System.out.println("5. Sair");
        System.out.print("Escolha uma opção: ");

        int opcao = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer

        switch (opcao) {
            case 1:
                fazerPedido();
                break;
            case 2:
                verMeusPedidos();
                break;
            case 3:
                refazerPedido();
                break;
            case 4:
                verCatalogo();
                break;
            case 5:
                usuarioLogado = null;
                System.out.println("Logout realizado!");
                break;
            default:
                System.out.println("Opção inválida!");
        }
    }

    private void fazerPedido() {
        System.out.println("\n=== NOVO PEDIDO ===");

        // Verificar CEP primeiro
        String cep = solicitarCep();
        if (cep == null) return;

        // Selecionar produtos
        List<ItemPedido> itens = new ArrayList<>();
        boolean continuarComprando = true;

        while (continuarComprando) {
            verCatalogo();
            System.out.print("\nDigite o ID do produto (0 para finalizar): ");
            int produtoId = scanner.nextInt();

            if (produtoId == 0) {
                continuarComprando = false;
                continue;
            }

            Optional<Produto> produtoSelecionado = catalogoProdutos.stream()
                    .filter(p -> p.getId() == produtoId)
                    .findFirst();

            if (produtoSelecionado.isPresent()) {
                System.out.print("Quantidade: ");
                int quantidade = scanner.nextInt();
                scanner.nextLine(); // Limpar buffer

                ItemPedido item = new ItemPedido();
                item.setProdutoId(produtoId);
                item.setQuantidade(quantidade);
                item.setPrecoUnitario(produtoSelecionado.get().getPreco());

                itens.add(item);
                System.out.println("Produto adicionado ao carrinho!");
            } else {
                System.out.println("Produto não encontrado!");
            }
        }

        if (itens.isEmpty()) {
            System.out.println("Nenhum produto selecionado. Pedido cancelado.");
            return;
        }

        // Criar pedido
        try {
            Pedido pedido = new Pedido();
            pedido.setUsuarioId(usuarioLogado.getId());
            pedido.setItens(itens);
            pedido.setCep(cep);
            pedido.calcularTotal();

            // Simular criação do pedido (substitua pela chamada real do service)
            pedido.setId((int) (Math.random() * 1000));
            pedido.setStatus(StatusPedido.PEDIDO_REALIZADO);
            pedido.setDataPedido(LocalDateTime.now());
            pedido.setCodigoProtocolo("DEL" + System.currentTimeMillis());

            System.out.println("\n=== PEDIDO REALIZADO COM SUCESSO ===");
            System.out.println("Número do pedido: " + pedido.getId());
            System.out.println("Código de protocolo: " + pedido.getCodigoProtocolo());
            System.out.println("Total: R$ " + String.format("%.2f", pedido.getPrecoTotal()));
            System.out.println("Status: " + pedido.getStatus());

        } catch (CepForaCoberturaException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }

    private String solicitarCep() {
        while (true) {
            System.out.print("Digite seu CEP (apenas números): ");
            String cep = scanner.nextLine().trim();

            try {
                logisticaService.verificarCoberturaEntrega(cep);
                return cep;
            } catch (CepForaCoberturaException e) {
                System.out.println("Erro: " + e.getMessage());
                System.out.print("Deseja tentar outro CEP? (S/N): ");
                String resposta = scanner.nextLine().trim().toUpperCase();

                if (!resposta.equals("S")) {
                    return null;
                }
            }
        }
    }

    private void verMeusPedidos() {
        System.out.println("\n=== MEUS PEDIDOS ===");

        // Simular busca de pedidos (substitua pela chamada real do service)
        List<Pedido> pedidos = Arrays.asList(
                criarPedidoExemplo(1, StatusPedido.PEDIDO_REALIZADO),
                criarPedidoExemplo(2, StatusPedido.EM_PREPARO),
                criarPedidoExemplo(3, StatusPedido.ENTREGUE)
        );

        if (pedidos.isEmpty()) {
            System.out.println("Nenhum pedido encontrado.");
            return;
        }

        for (Pedido pedido : pedidos) {
            System.out.println("\nPedido #" + pedido.getId());
            System.out.println("Data: " + pedido.getDataPedido());
            System.out.println("Status: " + pedido.getStatus());
            System.out.println("Total: R$ " + String.format("%.2f", pedido.getPrecoTotal()));
            System.out.println("Protocolo: " + pedido.getCodigoProtocolo());
        }
    }

    private void refazerPedido() {
        System.out.println("\n=== REFAZER PEDIDO ===");
        verMeusPedidos();

        System.out.print("\nDigite o número do pedido que deseja refazer: ");
        int pedidoId = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer

        try {
            // Simular refazer pedido (substitua pela chamada real do service)
            Pedido pedidoAntigo = criarPedidoExemplo(pedidoId, StatusPedido.ENTREGUE);
            Pedido novoPedido = new Pedido();
            novoPedido.setUsuarioId(usuarioLogado.getId());
            novoPedido.setItens(pedidoAntigo.getItens());
            novoPedido.setCep(pedidoAntigo.getCep());
            novoPedido.calcularTotal();
            novoPedido.setId((int) (Math.random() * 1000));
            novoPedido.setStatus(StatusPedido.PEDIDO_REALIZADO);
            novoPedido.setDataPedido(LocalDateTime.now());
            novoPedido.setCodigoProtocolo("DEL" + System.currentTimeMillis());

            System.out.println("Pedido refeito com sucesso!");
            System.out.println("Novo número: " + novoPedido.getId());
            System.out.println("Novo protocolo: " + novoPedido.getCodigoProtocolo());

        } catch (Exception e) {
            System.out.println("Erro ao refazer pedido: " + e.getMessage());
        }
    }

    private void verCatalogo() {
        System.out.println("\n=== CATÁLOGO DE PRODUTOS ===");
        System.out.println("ID | Nome | Preço | Descrição");
        System.out.println("-----------------------------");

        for (Produto produto : catalogoProdutos) {
            System.out.printf("%2d | %-15s | R$ %6.2f | %s%n",
                    produto.getId(),
                    produto.getNome(),
                    produto.getPreco(),
                    produto.getDescricao());
        }
    }

    private List<Produto> inicializarCatalogo() {
        List<Produto> produtos = new ArrayList<>();

        Produto p1 = new Produto();
        p1.setId(1);
        p1.setNome("Hambúrguer");
        p1.setDescricao("Hambúrguer artesanal com queijo");
        p1.setPreco(25.90);
        p1.setCategoriaId(1);

        Produto p2 = new Produto();
        p2.setId(2);
        p2.setNome("Pizza");
        p2.setDescricao("Pizza média mussarela");
        p2.setPreco(45.90);
        p2.setCategoriaId(1);

        Produto p3 = new Produto();
        p3.setId(3);
        p3.setNome("Refrigerante");
        p3.setDescricao("Lata 350ml");
        p3.setPreco(6.50);
        p3.setCategoriaId(2);

        produtos.add(p1);
        produtos.add(p2);
        produtos.add(p3);

        return produtos;
    }

    private List<Usuario> inicializarUsuarios() {
        List<Usuario> usuarios = new ArrayList<>();

        Usuario u1 = new Usuario();
        u1.setId(1);
        u1.setLogin("cliente1");
        u1.setSenha("senha123");
        u1.setEmail("cliente1@email.com");

        Usuario u2 = new Usuario();
        u2.setId(2);
        u2.setLogin("cliente2");
        u2.setSenha("senha123");
        u2.setEmail("cliente2@email.com");

        usuarios.add(u1);
        usuarios.add(u2);

        return usuarios;
    }

    private Pedido criarPedidoExemplo(int id, StatusPedido status) {
        Pedido pedido = new Pedido();
        pedido.setId(id);
        pedido.setUsuarioId(usuarioLogado.getId());
        pedido.setStatus(status);
        pedido.setDataPedido(LocalDateTime.now().minusDays(10 - id));
        pedido.setPrecoTotal(72.40);
        pedido.setCep("22041001");
        pedido.setCodigoProtocolo("DEL" + (1000 + id));

        // Itens exemplo
        ItemPedido item1 = new ItemPedido();
        item1.setProdutoId(1);
        item1.setQuantidade(2);
        item1.setPrecoUnitario(25.90);

        ItemPedido item2 = new ItemPedido();
        item2.setProdutoId(3);
        item2.setQuantidade(3);
        item2.setPrecoUnitario(6.50);

        pedido.setItens(Arrays.asList(item1, item2));

        return pedido;
    }
}
