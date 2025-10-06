package br.edu.infnet.tranqueiras.model.service;

import br.edu.infnet.tranqueiras.model.domain.TranqueiraDetalhes;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class TranqueiraDetalhesService {

    @Value("${tranqueiras.detalhes.api.url:http://localhost:8081}")
    private String apiUrl;

    private final RestTemplate restTemplate;

    public TranqueiraDetalhesService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<TranqueiraDetalhes> obterTodasTranqueiras() {
        try {
            TranqueiraDetalhes[] tranqueiras = restTemplate.getForObject(
                    apiUrl + "/api/tranqueiras",
                    TranqueiraDetalhes[].class
            );
            return tranqueiras != null ? Arrays.asList(tranqueiras) : List.of();
        } catch (Exception e) {
            System.err.println("Erro ao obter tranqueiras da API externa: " + e.getMessage());
            return List.of();
        }
    }

    public TranqueiraDetalhes obterTranqueiraPorId(String id) {
        try {
            return restTemplate.getForObject(
                    apiUrl + "/api/tranqueiras/" + id,
                    TranqueiraDetalhes.class
            );
        } catch (Exception e) {
            System.err.println("Erro ao obter tranqueira por ID da API externa: " + e.getMessage());
            return null;
        }
    }

    public List<TranqueiraDetalhes> obterTranqueirasPorCategoria(String categoria) {
        try {
            TranqueiraDetalhes[] tranqueiras = restTemplate.getForObject(
                    apiUrl + "/api/tranqueiras/categoria/" + categoria,
                    TranqueiraDetalhes[].class
            );
            return tranqueiras != null ? Arrays.asList(tranqueiras) : List.of();
        } catch (Exception e) {
            System.err.println("Erro ao obter tranqueiras por categoria da API externa: " + e.getMessage());
            return List.of();
        }
    }
}