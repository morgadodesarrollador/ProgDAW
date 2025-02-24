package com.morgado.jardineriagarden.modelo.entidades;

import javax.validation.constraints.NotEmpty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//La funcion de esta clase + @Entity va a crear la tabla
//Gamas en el SGBD --> Create Table
@Entity
@Table(name = "Gamas")
public class Gamas {
    
    @Id //primary key
    private String gamaid1;
    
    @Column(nullable = false)
    @NotEmpty
    private String descripcionTexto;
    
    @Column(nullable = true)
    private String descripcionHTML;
    
    @Column(nullable = false)
    @NotEmpty
    private String imagen;

    public Gamas(){}

    public Gamas(String Gama, String DescripcionTexto, String Imagen ){

    }
    public Gamas(String Gama, String DescripcionTexto, String DescripcionHTML, String Imagen ){

    }

    public void setDescripcionTexto(String descTexto){
        this.descripcionTexto = descTexto;
    }
    public String getDescripcionTexto(){
        return this.descripcionTexto;
    }

    public void setDescripcionHTML(String descHtml){
        this.descripcionHTML = descHtml;
    }
    public String getDescripcionHTML(){
        return this.descripcionHTML;
    }

    public void setImagen(String img){
        this.imagen = img;
    }
    public String getImagen(){
        return this.imagen;
    }
}
