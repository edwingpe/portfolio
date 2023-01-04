import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  itemExp: Item[] = [
    {
      nombre: "Swiss Medical",
      fechaIni: "25/11/1991",
      fechaFin: "12/12/2000",
      descripcion: "Lindo trabajo",
    },
    {
      nombre: "Otro Labyrio",
      fechaIni: "25/11/1991",
      fechaFin: "12/12/2000",
      descripcion: "meh",
    }];
      
  mostrar: Boolean = false;
  icono: String = "fa-solid fa-plus";

    constructor(){}

    ngOnInit(): void {
      
    }
    
    mostrarOcultar(){

      if(this.mostrar){
        this.mostrar = false;
        this.icono = "fa-solid fa-plus"
      } else{
        this.mostrar = true;
        this.icono = "fa-solid fa-minus"
      }
    }

    deleteItem(itemToDelete: Item): void{
      this.itemExp = this.itemExp.filter((item) => item!==itemToDelete)
    }


}
