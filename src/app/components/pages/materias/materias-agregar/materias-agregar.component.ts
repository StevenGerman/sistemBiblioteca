import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-materias-agregar',
  templateUrl: './materias-agregar.component.html',
  styleUrls: ['./materias-agregar.component.css']
})
export class MateriasAgregarComponent implements OnInit {

  formularioMaterias: FormGroup;

  constructor(
    private ruteador:Router,
    private servicioMaterias:MateriaService,
    private formulario: FormBuilder,
  ){
    this.formularioMaterias = formulario.group({
            matNombre:['',[Validators.required]],
          })
  }


  ngOnInit(){}

  hasErrors(controlName: string, errorType: string){
    return this.formularioMaterias.get(controlName)?.hasError(errorType) && this.formularioMaterias.get(controlName)?.touched;
  }

  enviarDatos():void{
    console.log(this.formularioMaterias.value);

    this.servicioMaterias.agregarMateria(this.formularioMaterias.value).subscribe(()=>{
    
      
      this.ruteador.navigateByUrl('/materias-listar');

    });
  }



}
