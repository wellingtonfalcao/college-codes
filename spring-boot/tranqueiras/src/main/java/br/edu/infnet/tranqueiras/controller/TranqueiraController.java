package br.edu.infnet.tranqueiras.controller;

import br.edu.infnet.tranqueiras.model.domain.Tranqueira;
import br.edu.infnet.tranqueiras.model.service.TranqueiraService;
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
    public ResponseEntity<List<Tranqueira>> obterTranqueiras() {
        return new ResponseEntity<>(tranqueiraService.obterLista(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tranqueira> obterPorId(@PathVariable Integer id) {
        Tranqueira tranqueira = tranqueiraService.obterPorId(id);
        return new ResponseEntity<>(tranqueira, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Tranqueira> incluir(@RequestBody Tranqueira tranqueira) {
        Tranqueira novaTranqueira = tranqueiraService.incluir(tranqueira);
        return new ResponseEntity<>(novaTranqueira, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Integer id) {
        tranqueiraService.excluir(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tranqueira> alterar(@PathVariable Integer id, @RequestBody Tranqueira tranqueira) {
        Tranqueira tranqueiraAtualizada = tranqueiraService.alterar(id, tranqueira);
        return new ResponseEntity<>(tranqueiraAtualizada, HttpStatus.OK);
    }
}