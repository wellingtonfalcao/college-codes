package br.edu.infnet.tranqueiras.model.service;

import br.edu.infnet.tranqueiras.excecoes.TranqueiraNaoEncontradaException;
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
        tranqueira.setId(nextId.getAndIncrement());
        mapaObjeto.put(tranqueira.getId(), tranqueira);
        return tranqueira;
    }

    public List<Tranqueira> obterLista(){
        return new ArrayList<Tranqueira>(mapaObjeto.values());
    }

    public Tranqueira obterPorId(Integer id) {
        Tranqueira tranqueira = mapaObjeto.get(id);
        if (tranqueira == null) {
            throw new TranqueiraNaoEncontradaException(id);
        }
        return tranqueira;
    }

    public void excluir(Integer id) {
        Tranqueira tranqueira = mapaObjeto.get(id);
        if (tranqueira == null) {
            throw new TranqueiraNaoEncontradaException(id);
        }
        mapaObjeto.remove(id);
    }

    public Tranqueira alterar(Integer id, Tranqueira tranqueiraAlterada) {
        if (!mapaObjeto.containsKey(id)) {
            throw new TranqueiraNaoEncontradaException(id);
        }
        tranqueiraAlterada.setId(id);
        mapaObjeto.put(id, tranqueiraAlterada);
        return tranqueiraAlterada;
    }
}