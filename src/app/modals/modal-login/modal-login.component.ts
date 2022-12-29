import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formLogin = this.formBuilder.group({
      email:['',[]],
      password:['',[]]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
  

 

 
  

