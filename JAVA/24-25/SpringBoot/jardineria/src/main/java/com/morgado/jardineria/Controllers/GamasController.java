package com.morgado.jardineria.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.morgado.jardineria.model.Services.GamasService;
import com.morgado.jardineria.model.Entity.Gamas;


@Controller
public class GamasController {
    @Autowired
    private GamasService gamasService;

    @GetMapping("/gamas")
    public String getGamas(Model modelo) {
        List<Gamas> gamas = this.gamasService.getAll(); //4
        modelo.addAttribute("Lgamas", gamas);
        return "/www/gamas/listar";
    }
    

    /*
     * Spring no puede determinar el nombre del parámetro de un método del controlador porque no está compilado 
     * con la opción -parameters. Esto sucede cuando se usa anotaciones como @RequestParam, 
     * @PathVariable, o @RequestBody sin especificar un nombre explícito y sin compilar correctamente el código fuente.
     */

    @GetMapping("/gamas/{id}")
    public String getGama(@PathVariable(value="id", required=false) String id, Model vista) {
    // public String getGama(@RequestParam(value="param", required=false) String id) {
    //Model vista --> es un area de intercambio de datos entre el 
    //controlador y la vista --------- NO ES EL CONCEPTO DE MODELO (MVC)
    //en la plantilla detalle.html tendremos el objeto "gama" de forma magica o misteriosa
        System.out.println("La gama es " + id);
        Gamas gama = this.gamasService.getId(id); //4
        System.out.println(gama);

        vista.addAttribute("Vgama", gama);
        return "/www/gamas/detalle";
    }
}
