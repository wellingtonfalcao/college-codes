package br.edu.infnet.tranqueiras.controller;

import br.edu.infnet.tranqueiras.model.domain.TranqueiraDetalhes;
import br.edu.infnet.tranqueiras.model.service.TranqueiraDetalhesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/detalhes/tranqueiras")
public class TranqueiraDetalhesController {

    private final TranqueiraDetalhesService tranqueiraDetalhesService;

    public TranqueiraDetalhesController(TranqueiraDetalhesService tranqueiraDetalhesService) {
        this.tranqueiraDetalhesService = tranqueiraDetalhesService;
    }

    @GetMapping
    public ResponseEntity<List<TranqueiraDetalhes>> obterTodasTranqueiras() {
        List<TranqueiraDetalhes> tranqueiras = tranqueiraDetalhesService.obterTodasTranqueiras();
        return new ResponseEntity<>(tranqueiras, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TranqueiraDetalhes> obterTranqueiraPorId(@PathVariable String id) {
        TranqueiraDetalhes tranqueira = tranqueiraDetalhesService.obterTranqueiraPorId(id);
        if (tranqueira != null) {
            return new ResponseEntity<>(tranqueira, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<TranqueiraDetalhes>> obterTranqueirasPorCategoria(@PathVariable String categoria) {
        List<TranqueiraDetalhes> tranqueiras = tranqueiraDetalhesService.obterTranqueirasPorCategoria(categoria);
        return new ResponseEntity<>(tranqueiras, HttpStatus.OK);
    }
}