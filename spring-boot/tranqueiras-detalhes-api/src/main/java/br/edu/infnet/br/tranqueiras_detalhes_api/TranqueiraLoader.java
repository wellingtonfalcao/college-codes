package br.edu.infnet.br.tranqueiras_detalhes_api;

import br.edu.infnet.br.tranqueiras_detalhes_api.model.domain.Tranqueira;
import br.edu.infnet.br.tranqueiras_detalhes_api.model.service.TranqueiraService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TranqueiraLoader implements ApplicationRunner {

    private final TranqueiraService tranqueiraService;

    public TranqueiraLoader(TranqueiraService tranqueiraService) {
        this.tranqueiraService = tranqueiraService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("=== Carregando dados externos de tranqueiras ===");

        List<Tranqueira> tranqueiras = tranqueiraService.obterTodasTranqueiras();

        for (Tranqueira tranqueira : tranqueiras) {
            System.out.println("# " + tranqueira);
        }

        System.out.println("=== Total de tranqueiras carregadas: " + tranqueiras.size() + " ===");
    }
}