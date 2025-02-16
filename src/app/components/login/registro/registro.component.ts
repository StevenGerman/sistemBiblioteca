import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formularioRegistro: FormGroup;

  constructor(
    private ruteador: Router,
    private formulario : FormBuilder,
    private servicioRegistro : RegistroService,
  ){

    this.formularioRegistro = formulario.group({
            perNombre:['',[Validators.required]],
            perApellido:['',[Validators.required]],
            perDni:['',[Validators.required]],
            perContrasena:['',[Validators.required]],
          })
  }

  
  hasErrors(controlName: string, errorType: string){
    return this.formularioRegistro.get(controlName)?.hasError(errorType) && this.formularioRegistro.get(controlName)?.touched;
  }

  ngOnInit(){

  }

  enviarDatos(){
    this.servicioRegistro.agregarRegistro(this.formularioRegistro.value).subscribe((respuesta)=>{
      console.log(respuesta);
    })
  }


}
