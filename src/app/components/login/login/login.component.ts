import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login.model';
import { LoginService } from 'src/app/services/login.service';

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
    private serivicioLogin: LoginService,
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

  enviarDatos(){
    if(!this.formularioLogin.invalid) return;
    if(this.formularioLogin.value.perDni == undefined) return;


    const objeto:Login = {

      perDni: this.formularioLogin.value.perDni,
      perContrasena :this.formularioLogin.value.perContrasena,

    }

    this.serivicioLogin.LoginUser(objeto).subscribe({
      next:(data){
      
      }
    })

   
  }


}
