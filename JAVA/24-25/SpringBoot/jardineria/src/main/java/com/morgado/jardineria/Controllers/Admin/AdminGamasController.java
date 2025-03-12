package com.morgado.jardineria.Controllers.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;

import com.morgado.jardineria.model.Entity.Gamas;
import com.morgado.jardineria.model.Services.GamasService;


@Controller
public class AdminGamasController {
    @Autowired
    private GamasService gamasService;
    
    @GetMapping("/admin/gamas")
    public String gamas(Model modelo) {
        List<Gamas> gamas = this.gamasService.getAll(); //4
        modelo.addAttribute("Lgamas", gamas);
        return "/admin/gamas/listar";
    }

    @GetMapping("/admin/gamas/new")
    public String newgama(Model vista) {
        Gamas gama = new Gamas();
        vista.addAttribute("gamaForm", gama);
        return "/admin/gamas/new";
    }
    
    @PostMapping("/admin/gamas/save")
    public String savegama(@ModelAttribute("gamaForm") Gamas gama) {
        System.out.println("Guardando Gams ...");
        System.out.println(gama);
        gama.setDescripcionTexto(gama.getDescripcionTexto().toUpperCase());
        this.gamasService.create(gama);
        return "redirect:/admin/gamas"; //url 
        // return "/admin/gamas/listar"; --> plantilla
        

    }
    
}
