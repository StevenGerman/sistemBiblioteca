import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login.model';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from 'jwt-decode';
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

    const objeto:any = {

      perDni: this.formularioLogin.value.perDni,
      perContrasena: this.formularioLogin.value.perContrasena,

    }
    console.log(objeto);

    this.serivicioLogin.LoginUser(objeto).subscribe({
      next:(data)=>{
        if(data.isSuccess){
          localStorage.setItem("token", data.token);
          console.log(data.token);
          const algo = data.token;
          
          const rol : any  = jwt_decode(algo);
          localStorage.setItem("rolNombre", rol.data.rolNombre);
          localStorage.setItem("idPersona", rol.data.idPersona);
          console.log(rol);
          setTimeout(()=>{
            
            if(this.serivicioLogin.obtenerRol()== 'Bibliotecario'){
              this.ruteador.navigate(['dash-bibliotecario']);
            }else if(this.serivicioLogin.obtenerRol()== 'Estudiante') {
              this.ruteador.navigate(['dash-estudiante']);
            }
            
          },400)
         
        }else{
          alert("Credenciales Incorrectas");
        }
      
      },
      error:(error)=>{
        console.log(error.message);
      }
    })

   
  }

  registrarse(){
    this.ruteador.navigateByUrl('registro');
  }


}
