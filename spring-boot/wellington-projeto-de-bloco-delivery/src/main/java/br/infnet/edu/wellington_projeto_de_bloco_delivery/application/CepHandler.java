package br.infnet.edu.wellington_projeto_de_bloco_delivery.application;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.CepForaCoberturaException;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.LogisticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CepHandler {

    @Autowired
    private LogisticaService logisticaService;

    @Autowired
    private MenuHandler menuHandler;

    public void verificarCep() {
        System.out.println("\n************ VERIFICAR CEP ************");
        System.out.print("Digite o CEP para verificação: ");
        String cep = menuHandler.getScanner().nextLine();

        try {
            boolean valido = logisticaService.verificarCoberturaEntrega(cep);
            System.out.println("✅ CEP VÁLIDO! Área de entrega coberta.");
            System.out.println("CEP: " + cep);
        } catch (CepForaCoberturaException e) {
            System.out.println("❌ CEP FORA DA ÁREA DE COBERTURA: " + e.getMessage());
        }
    }
}