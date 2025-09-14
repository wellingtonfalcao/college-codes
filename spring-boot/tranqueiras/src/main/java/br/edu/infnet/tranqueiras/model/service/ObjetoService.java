package br.edu.infnet.tranqueiras.model.service;

import br.edu.infnet.tranqueiras.model.domain.Objeto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class ObjetoService {

    private final Map<Integer, Objeto> mapaObjeto = new HashMap<Integer, Objeto>();
    private final AtomicInteger nextId = new AtomicInteger(1);

    public Objeto incluir(Objeto objeto){
        objeto.setId(nextId.getAndIncrement());
        mapaObjeto.put(objeto.getId(), objeto);
        return objeto;
    }

    public List<Objeto> obterLista(){
        return new ArrayList<Objeto>(mapaObjeto.values());
    }
}
