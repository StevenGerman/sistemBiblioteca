import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formularioLogin : FormGroup;

  constructor(

    private ruteador : Router,
    private formulario : FormBuilder,
  ){
    this.formularioLogin = formulario.group({
      perDni:['',[Validators.required]],
      perContrasena:['',[Validators.required]]
    })

  }
  ngOnInit(): void {
    
  }


  hasErrors(controlName: string, errorType: string){
    return this.formularioLogin.get(controlName)?.hasError(errorType) && this.formularioLogin.get(controlName)?.touched;
  }

  enviarDatos(){}


}
