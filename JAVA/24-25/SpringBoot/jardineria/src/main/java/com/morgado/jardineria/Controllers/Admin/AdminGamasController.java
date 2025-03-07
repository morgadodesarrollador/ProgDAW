package com.morgado.jardineria.Controllers.Admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class AdminGamasController {

    @GetMapping("/admin/gamas")
    public String gamas() {
        System.out.println("Admin gamas");
        return "/admin/gamas/index";
    }

    @GetMapping("/admin/gamas/new")
    public String newgama() {
        System.out.println("Admin gamas New");
        return "/admin/gamas/new";
    }
    
    
}
