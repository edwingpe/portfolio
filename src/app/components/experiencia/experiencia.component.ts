import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

    mostrar: Boolean = false;
    icono: String = "fa-solid fa-plus"
    
    mostrarOcultar(){

      if(this.mostrar){
        this.mostrar = false;
        this.icono = "fa-solid fa-plus"
      } else{
        this.mostrar = true;
        this.icono = "fa-solid fa-minus"
      }
    }
}
