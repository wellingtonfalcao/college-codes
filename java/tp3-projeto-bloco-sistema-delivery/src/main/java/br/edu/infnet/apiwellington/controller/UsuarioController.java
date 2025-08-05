package br.edu.infnet.apiwellington.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

    @GetMapping("/login")
    public void GerarLerCSV() {
        System.out.println("Teste");
    }
}
