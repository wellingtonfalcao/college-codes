package br.infnet.edu.wellington_projeto_de_bloco_delivery.application;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.console.DeliveryConsole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ConsoleRunner implements CommandLineRunner {

    @Autowired
    private DeliveryConsole deliveryConsole;

    @Override
    public void run(String... args) throws Exception {
        deliveryConsole.iniciar();
    }
}