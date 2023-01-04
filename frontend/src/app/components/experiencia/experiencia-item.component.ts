import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit { 
  
  @Input() itemExp!: Item;

  @Output() itemExpDelete = new EventEmitter<void>();
  constructor(){}

  ngOnInit(): void {}

  onDeleteClicked(): void{
    this.itemExpDelete.emit();
  }

}
