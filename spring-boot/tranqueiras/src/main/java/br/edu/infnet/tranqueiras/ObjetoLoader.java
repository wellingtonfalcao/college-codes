package br.edu.infnet.tranqueiras;

import br.edu.infnet.tranqueiras.model.domain.Objeto;
import br.edu.infnet.tranqueiras.model.service.ObjetoService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Component //Classe que quando rodar a aplicação Spring Boot será acessada (Usando ApplicationRunner)
public class ObjetoLoader implements ApplicationRunner {

    //injeção de dependencia
    private final ObjetoService objetoService;

    public ObjetoLoader(ObjetoService objetoService) {
        this.objetoService = objetoService;
    }

    private final Map<Integer, Objeto> mapaObjeto = new HashMap<Integer, Objeto>();
    private final AtomicInteger nextId = new AtomicInteger(1);

    @Override
    public void run(ApplicationArguments args) {
        String arquivo = "arquivos/objetos.txt";

        //Leitura do arquivo
        FileReader fileReader;
        try {
            fileReader = new FileReader(arquivo);
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            String linha = bufferedReader.readLine();
            String[] campos = null;
            while (linha != null) {

                campos = linha.split(";");

                Objeto objeto = new Objeto();

                objeto.setNome(campos[0]);
                objeto.setDescricao(campos[1]);

                mapaObjeto.put(objeto.getId(), objeto);


                linha = bufferedReader.readLine();
            }

            for(Objeto objeto: mapaObjeto.values()){
                System.out.println("# " + objeto);
            }


            bufferedReader.close();
        } catch (FileNotFoundException e) {
            System.err.println("Arquivo não encontrado! Verifique o caminho informado. Detalhe: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("Erro de leitura/escrita no arquivo. Detalhe: " + e.getMessage());
        }
    }
}
