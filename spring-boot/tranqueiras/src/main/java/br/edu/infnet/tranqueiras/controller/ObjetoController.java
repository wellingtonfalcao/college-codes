package br.edu.infnet.tranqueiras.controller;

import br.edu.infnet.tranqueiras.model.domain.Objeto;
import br.edu.infnet.tranqueiras.model.service.ObjetoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/objetos")
public class ObjetoController {
    private final ObjetoService objetoService;

    public ObjetoController (ObjetoService objetoService) {
        this.objetoService = objetoService;
    }
    @GetMapping
    public List<Objeto> obterObjetos() {
       return objetoService.obterLista();
    }
}
