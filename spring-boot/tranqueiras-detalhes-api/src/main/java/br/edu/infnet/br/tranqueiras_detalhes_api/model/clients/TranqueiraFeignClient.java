package br.edu.infnet.br.tranqueiras_detalhes_api.model.clients;

import br.edu.infnet.br.tranqueiras_detalhes_api.model.domain.Tranqueira;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "tranqueiraFeignClient", url = "${json.external.url}")
public interface TranqueiraFeignClient {

    @GetMapping
    List<Tranqueira> obterTodasTranqueiras();
}