package com.morgado.jardineriagarden.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;




@Controller()
public class SiteController {

    @GetMapping("/")
    public String home() {
        return "/www/site/index";
    }
    

    @GetMapping("/servicios")
    public String servicios() {
        return "/www/site/servicios";
    }
    
    
}
