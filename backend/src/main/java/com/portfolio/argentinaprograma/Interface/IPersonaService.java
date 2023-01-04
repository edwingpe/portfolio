package com.portfolio.argentinaprograma.Interface;

import com.portfolio.argentinaprograma.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona;
    public void savePersona(Persona persona);
    
    //Eliminar un objeto persona buscado por ID
    public void deletePersona(int id);
    
    //Buscar una persona por ID
    
    public Persona findPersona(int id);
    
}
