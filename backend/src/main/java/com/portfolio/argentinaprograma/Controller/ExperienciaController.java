
package com.portfolio.argentinaprograma.Controller;

import com.portfolio.argentinaprograma.Dto.dtoExperiencia;
import com.portfolio.argentinaprograma.Entity.Experiencia;
import com.portfolio.argentinaprograma.Service.SExperiencia;
import io.micrometer.common.util.StringUtils;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("explab")
@CrossOrigin(origins = "https://localhost:4200")

public class ExperienciaController {
    @Autowired
    SExperiencia sExperiencia;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Experiencia>> list(){
        List<Experiencia> list = sExperiencia.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoExperiencia dtoexp){
        if(StringUtils.isBlank(dtoexp.getNombreExp()))
            return new ResponseEntity(new mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sExperiencia.existByNombreExp(dtoexp.getNombreExp()))
            return new ResponseEntity(new mensaje("Esa experiencia existe"), HttpStatus.BAD_REQUEST);
        
        Experiencia experiencia = new Experiencia(dtoexp.getNombreExp(), dtoexp.getDescripcionExp());
        sExperiencia.save(experiencia);
        
        return new ResponseEntity(new mensaje("Experiencia agregada"),HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoExperiencia dtoexp){
        //Validacion de existencia de ID.
        if(!sExperiencia.existById(id))
            return new ResponseEntity(new mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        //Compara los nombres de las experiencias
        if(sExperiencia.existByNombreExp(dtoexp.getNombreExp()) && sExperiencia.getByNombreExp(dtoexp.getNombreExp()).get().getId() != id)
            return new ResponseEntity(new mensaje("Experiencia existe"), HttpStatus.BAD_REQUEST);
        // Validacion de campo nombre no puede estar vacio
        if(StringUtils.isBlank(dtoexp.getNombreExp()))
            return new ResponseEntity(new mensaje("Nombre Obligatorio"), HttpStatus.BAD_REQUEST);
        
        Experiencia experiencia = sExperiencia.getOne(id).get();
        experiencia.setNombreExp(dtoexp.getNombreExp());
        experiencia.setDescripcionExp(dtoexp.getDescripcionExp());
        
        sExperiencia.save(experiencia);
        return new ResponseEntity(new mensaje("Experiencia actualizada"),HttpStatus.OK);
    }
    
    public ResponseEntity <?> delete(@PathVariable("id") int id){
        //Validamos existencia del ID
        if(!sExperiencia.existById(id))
            return new ResponseEntity(new mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        
        sExperiencia.delete(id);
        
        return new ResponseEntity (new mensaje("Experiencia Eliminada"), HttpStatus.OK);
        
    }
    
        
            
}
