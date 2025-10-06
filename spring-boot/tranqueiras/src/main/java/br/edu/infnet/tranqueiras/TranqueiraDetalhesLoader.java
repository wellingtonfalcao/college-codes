package br.edu.infnet.tranqueiras;

import br.edu.infnet.tranqueiras.model.domain.TranqueiraDetalhes;
import br.edu.infnet.tranqueiras.model.service.TranqueiraDetalhesService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TranqueiraDetalhesLoader implements ApplicationRunner {

    private final TranqueiraDetalhesService tranqueiraDetalhesService;

    public TranqueiraDetalhesLoader(TranqueiraDetalhesService tranqueiraDetalhesService) {
        this.tranqueiraDetalhesService = tranqueiraDetalhesService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("=== TESTANDO CONEXÃO COM API EXTERNA ===");

        try {
            List<TranqueiraDetalhes> tranqueiras = tranqueiraDetalhesService.obterTodasTranqueiras();

            if (tranqueiras.isEmpty()) {
                System.out.println("Nenhuma tranqueira encontrada na API externa");
            } else {
                System.out.println("=== DADOS DA API EXTERNA ===");
                for (TranqueiraDetalhes tranqueira : tranqueiras) {
                    System.out.println("# " + tranqueira);
                }
                System.out.println("=== Total de tranqueiras na API externa: " + tranqueiras.size() + " ===");
            }
        } catch (Exception e) {
            System.err.println("Erro ao conectar com API externa: " + e.getMessage());
            System.out.println("Certifique-se de que a API externa está rodando em http://localhost:8081");
        }

        System.out.println("=========================================");
        System.out.println("SISTEMA PRONTO!");
        System.out.println("Dados locais: GET http://localhost:8080/api/tranqueiras");
        System.out.println("Dados API externa: GET http://localhost:8080/api/detalhes/tranqueiras");
        System.out.println("=========================================");
    }
}