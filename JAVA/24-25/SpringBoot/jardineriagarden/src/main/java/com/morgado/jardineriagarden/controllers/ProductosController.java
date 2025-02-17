package com.morgado.jardineriagarden.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller()
public class ProductosController {
    //endpoint's (REQUEST) --> Puntos de entrada a la App

    @GetMapping("/productos") //la página de la sección Productos
    public String home() {
        return "/www/productos/index";
    }

    @GetMapping("/producots/listar") //select *
    public String getAll() {
        return "/www/productos/listar";
    }
    
    //mostrar un producto getId()


    
}
