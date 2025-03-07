package com.morgado.jardineria.model.Services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.morgado.jardineria.model.Entity.Gamas;
import com.morgado.jardineria.model.Repository.GamasRepository;

@Service
public class GamasService {
    @Autowired //inyeccion del codigo del gamas Rep
    GamasRepository gamasRep;

    public List<Gamas> getAll() {
        //finAll(ORM) = select * from Gamas
        List<Gamas> gamas = this.gamasRep.findAll();//5
        return gamas;
    }

    public void create(Gamas gama){
        this.gamasRep.save(gama);
    }


    public void delete (String id){
        this.gamasRep.deleteById(id);
    }

    public Gamas getId(String id){
        //finByID(ORM) = select * from Gamas where gamaid=$id
        //el orm transforma el registro devuelto por MYSQL en un objeto Java que
        //se almacena en la variable gama
        Gamas gama = this.gamasRep.findById(id).get();
        return gama;
    }

    
}
