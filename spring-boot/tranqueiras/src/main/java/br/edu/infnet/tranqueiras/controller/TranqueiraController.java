package br.edu.infnet.tranqueiras.controller;

import br.edu.infnet.tranqueiras.model.domain.Tranqueira;
import br.edu.infnet.tranqueiras.model.service.TranqueiraService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tranqueiras")
public class TranqueiraController {

    //Injeção de dependencia
    private final TranqueiraService tranqueiraService;
    public TranqueiraController(TranqueiraService tranqueiraService) {
        this.tranqueiraService = tranqueiraService;
    }

    //Obter lista de tranqueiras
    @GetMapping
    public List<Tranqueira> obterTranqueiras() {
        return tranqueiraService.obterLista();
    }

    @PostMapping
    public Tranqueira incluir(@RequestBody Tranqueira tranqueira) {
        return tranqueiraService.incluir(tranqueira);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Integer id) {
        tranqueiraService.excluir(id);
    }

    @PutMapping("/{id}")
    public Tranqueira alterar(@PathVariable Integer id,@RequestBody Tranqueira tranqueira) {
        return tranqueiraService.alterar(id, tranqueira);
    }
}
