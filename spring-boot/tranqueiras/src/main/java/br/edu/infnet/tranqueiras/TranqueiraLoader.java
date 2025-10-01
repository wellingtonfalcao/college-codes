package br.edu.infnet.tranqueiras;

import br.edu.infnet.tranqueiras.model.domain.Categoria;
import br.edu.infnet.tranqueiras.model.domain.Tranqueira;
import br.edu.infnet.tranqueiras.model.service.TranqueiraService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

@Component //Classe que quando rodar a aplicação Spring Boot será acessada (Usando ApplicationRunner)
public class TranqueiraLoader implements ApplicationRunner {

    //injeção de dependencia
    private final TranqueiraService tranqueiraService;

    public TranqueiraLoader(TranqueiraService tranqueiraService) {
        this.tranqueiraService = tranqueiraService;
    }

    @Override
    public void run(ApplicationArguments args) {
        String arquivo = "arquivos/lista-objetos.txt";

        //Leitura do arquivo
        FileReader fileReader;
        try {
            fileReader = new FileReader(arquivo);
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            String linha = bufferedReader.readLine();
            String[] campos = null;
            while (linha != null) {

                campos = linha.split(",");

                Tranqueira tranqueira = new Tranqueira();

                tranqueira.setNome(campos[0]);
                tranqueira.setDescricao(campos[1]);
                tranqueira.setCategoria(Categoria.valueOf(campos[2]));
                tranqueira.setQuantidade(Integer.valueOf(campos[3]));
                tranqueira.setLocalizacao(campos[4]);
                tranqueira.setFabricante(campos[5]);
                tranqueira.setModelo(campos[6]);
                tranqueira.setDisponivel(Boolean.valueOf(campos[7]));

                tranqueiraService.incluir(tranqueira); // Encapsulado na camada de serviço

                linha = bufferedReader.readLine();
            }

            for(Tranqueira tranqueira : tranqueiraService.obterLista()){
                System.out.println("# " + tranqueira);
            }

            bufferedReader.close();
        } catch (FileNotFoundException e) {
            System.err.println("Arquivo não encontrado! Verifique o caminho informado. Detalhe: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("Erro de leitura/escrita no arquivo. Detalhe: " + e.getMessage());
        }
    }
}
