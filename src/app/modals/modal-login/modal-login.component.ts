import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formLogin = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  ngOnInit(): void {}

  onEnviar(event: Event){
    event.preventDefault;

    if (this.formLogin.valid){
      //Por completar, se envian los datos al servidor.
      //
    } else {
      //Se activan las validaciones para que se muestren en el html
      this.formLogin.markAllAsTouched();
    }

  }

  //Metodos para el formulario

  get emailControl(): FormControl {
    return this.formLogin.get('email') as FormControl;
  }

  get passwordControl(): FormControl{
    return this.formLogin.get('password') as FormControl;
  }



}
  

 

 
  

