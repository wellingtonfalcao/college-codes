package br.edu.infnet.tranqueiras.model.service;

import br.edu.infnet.tranqueiras.model.domain.Tranqueira;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class TranqueiraService {

    private final Map<Integer, Tranqueira> mapaObjeto = new HashMap<Integer, Tranqueira>();
    private final AtomicInteger nextId = new AtomicInteger(1);

    public Tranqueira incluir(Tranqueira tranqueira){
        tranqueira.setId((int) nextId.getAndIncrement()); //Auto incrementa o id da tranqueira
        mapaObjeto.put(tranqueira.getId(), tranqueira);
        return tranqueira;
    }

    public List<Tranqueira> obterLista(){
        return new ArrayList<Tranqueira>(mapaObjeto.values()); // Retornar uma nova coleção com os dados obtidos
    }
}
