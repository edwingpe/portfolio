package com.portfolio.argentinaprograma.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
/**
 *
 * @author edwin
 */
public class Persona {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud excedida")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud excedida")
    private String apellido;
    
    @Size(min = 1, max = 50, message = "Longitud excedida")
    private String img;
       
}
