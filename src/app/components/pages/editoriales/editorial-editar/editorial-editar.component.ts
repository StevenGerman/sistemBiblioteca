import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-editar',
  templateUrl: './editorial-editar.component.html',
  styleUrls: ['./editorial-editar.component.css']
})
export class EditorialEditarComponent implements OnInit{

    formularioEditoriales: FormGroup;

    idSeleccionado:any;


    constructor( 
      private ruteador: Router,
      private activeRoute:ActivatedRoute,
      private servicioEditoriales:EditorialService,
      private formulario : FormBuilder){

        this.idSeleccionado = activeRoute.snapshot.paramMap.get('id');
        console.log(this.idSeleccionado);

        this.servicioEditoriales.obtenerEditorialID(this.idSeleccionado).subscribe((respuesta)=>{
          console.log(respuesta);

          this.formularioEditoriales.setValue({
            idEditorial:respuesta[0]['idEditorial'],
            ediNombre:respuesta[0]['ediNombre'],
            ediDireccion:respuesta[0]['ediDireccion'],
            ediTelefono:respuesta[0]['ediTelefono'],
            ediEmail:respuesta[0]['ediEmail']
          });


        })

        this.formularioEditoriales = formulario.group({
        idEditorial:[''],
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

      this.servicioEditoriales.editarEditorial(this.formularioEditoriales.value).subscribe((respuesta)=>{
      
        
        console.log(respuesta);

      });
    }

}
