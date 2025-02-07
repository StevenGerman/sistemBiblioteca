import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-agregar',
  templateUrl: './editorial-agregar.component.html',
  styleUrls: ['./editorial-agregar.component.css']
})
export class EditorialAgregarComponent implements OnInit{

  formularioEditoriales: FormGroup;

    constructor(
      private ruteador: Router,
      private servicioEditoriales:EditorialService,
      private formulario : FormBuilder
    ){
      this.formularioEditoriales = formulario.group({
        ediNombre:['',[Validators.required]],
        ediDireccion:['',[Validators.required]],
        ediTelefono:['',[Validators.required]],
        ediEmail:['',[Validators.required]]
      })

    }

    ngOnInit(): void {
      
    }

    enviarDatos():void{
      console.log(this.formularioEditoriales.value);

      this.servicioEditoriales.agregarEditorial(this.formularioEditoriales.value).subscribe(()=>{
      
        this.ruteador.navigateByUrl('/editorial-listar');

      });
    }
  

}
