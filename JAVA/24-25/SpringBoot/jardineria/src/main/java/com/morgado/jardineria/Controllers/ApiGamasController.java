package com.morgado.jardineria.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.morgado.jardineria.model.Services.GamasService;
import com.morgado.jardineria.model.Entity.Gamas;

@RestController
@RequestMapping("/api/gamas") // Ruta para acceder a la API
public class ApiGamasController {
    @Autowired
    private GamasService gamasService;


    public  List<Gamas> getGamas() {
       
        List<Gamas> gamas = this.gamasService.getAll(); //4
        return gamas;
    }
}
