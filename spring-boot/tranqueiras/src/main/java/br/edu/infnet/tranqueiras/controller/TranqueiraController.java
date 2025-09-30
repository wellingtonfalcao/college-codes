package br.edu.infnet.tranqueiras.controller;

import br.edu.infnet.tranqueiras.model.domain.Tranqueira;
import br.edu.infnet.tranqueiras.model.service.TranqueiraService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/objetos")
public class TranqueiraController {
    private final TranqueiraService tranqueiraService;

    public TranqueiraController(TranqueiraService tranqueiraService) {
        this.tranqueiraService = tranqueiraService;
    }
    @GetMapping
    public List<Tranqueira> obterObjetos() {
       return tranqueiraService.obterLista();
    }
}
