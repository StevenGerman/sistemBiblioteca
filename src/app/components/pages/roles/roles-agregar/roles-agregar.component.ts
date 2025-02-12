import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-roles-agregar',
  templateUrl: './roles-agregar.component.html',
  styleUrls: ['./roles-agregar.component.css']
})
export class RolesAgregarComponent implements OnInit{

  formularioRoles: FormGroup;
  
    constructor(
      private ruteador:Router,
      private servicioRoles:RolService,
      private formulario: FormBuilder,
    ){
      this.formularioRoles = formulario.group({
              rolNombre:['',[Validators.required]],
            })
    }
  
  
    ngOnInit(){}
  
    hasErrors(controlName: string, errorType: string){
      return this.formularioRoles.get(controlName)?.hasError(errorType) && this.formularioRoles.get(controlName)?.touched;
    }
  
    enviarDatos():void{
      console.log(this.formularioRoles.value);
  
      this.servicioRoles.agregarRol(this.formularioRoles.value).subscribe(()=>{
      
        
        this.ruteador.navigateByUrl('/rol-listar');
  
      });
    }


}
