package br.edu.infnet.br.tranqueiras_detalhes_api.model.service;

import br.edu.infnet.br.tranqueiras_detalhes_api.model.clients.TranqueiraFeignClient;
import br.edu.infnet.br.tranqueiras_detalhes_api.model.domain.Tranqueira;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TranqueiraService {

    private final TranqueiraFeignClient tranqueiraFeignClient;

    public TranqueiraService(TranqueiraFeignClient tranqueiraFeignClient) {
        this.tranqueiraFeignClient = tranqueiraFeignClient;
    }

    public List<Tranqueira> obterTodasTranqueiras() {
        return tranqueiraFeignClient.obterTodasTranqueiras();
    }

    public Tranqueira obterTranqueiraPorId(String id) {
        List<Tranqueira> tranqueiras = obterTodasTranqueiras();
        return tranqueiras.stream()
                .filter(t -> t.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public List<Tranqueira> obterTranqueirasPorCategoria(String categoria) {
        List<Tranqueira> tranqueiras = obterTodasTranqueiras();
        return tranqueiras.stream()
                .filter(t -> t.getCategoria().equalsIgnoreCase(categoria))
                .toList();
    }
}