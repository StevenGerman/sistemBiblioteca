import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setupTestingRouter } from '@angular/router/testing';
import { Materia } from 'src/app/interfaces/materia.model';
import { LoginService } from 'src/app/services/login.service';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-materias-listar',
  templateUrl: './materias-listar.component.html',
  styleUrls: ['./materias-listar.component.css']
})
export class MateriasListarComponent implements OnInit {


  isEstudiante : boolean = true;
  listadoMaterias:Materia[]=[];
  constructor(
    private ruteador: Router,
    private servicioMaterias:MateriaService,
    private loginService:LoginService,
    
  ){}

  ngOnInit(): void {
    this.cargarMaterias();
    
    const rol = this.loginService.obtenerRol();
    if (rol === 'Estudiante') {
      this.isEstudiante = true;
    }else{
      this.isEstudiante = false;
    }
  }

  cargarMaterias(){
    this.servicioMaterias.obtenerMaterias().subscribe((respuesta)=>{
      console.log(respuesta);
      this.listadoMaterias = respuesta;
    })
  }

  eliminarMateria(idMateria:any){
    this.servicioMaterias.eliminarEditorial(idMateria).subscribe((respuesta)=>{
      console.log(respuesta);
      
      this.cargarMaterias();
      
    })
   
  }

  editarMateria(idMateria:any){

  }
}
