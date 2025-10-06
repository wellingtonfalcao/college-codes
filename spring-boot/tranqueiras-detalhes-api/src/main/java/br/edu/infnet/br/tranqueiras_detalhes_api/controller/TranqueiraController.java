package br.edu.infnet.br.tranqueiras_detalhes_api.controller;

import br.edu.infnet.br.tranqueiras_detalhes_api.model.domain.Tranqueira;
import br.edu.infnet.br.tranqueiras_detalhes_api.model.service.TranqueiraService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tranqueiras")
public class TranqueiraController {

    private final TranqueiraService tranqueiraService;

    public TranqueiraController(TranqueiraService tranqueiraService) {
        this.tranqueiraService = tranqueiraService;
    }

    @GetMapping
    public ResponseEntity<List<Tranqueira>> obterTodasTranqueiras() {
        List<Tranqueira> tranqueiras = tranqueiraService.obterTodasTranqueiras();
        return new ResponseEntity<>(tranqueiras, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tranqueira> obterTranqueiraPorId(@PathVariable String id) {
        Tranqueira tranqueira = tranqueiraService.obterTranqueiraPorId(id);
        if (tranqueira != null) {
            return new ResponseEntity<>(tranqueira, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Tranqueira>> obterTranqueirasPorCategoria(@PathVariable String categoria) {
        List<Tranqueira> tranqueiras = tranqueiraService.obterTranqueirasPorCategoria(categoria);
        return new ResponseEntity<>(tranqueiras, HttpStatus.OK);
    }
}