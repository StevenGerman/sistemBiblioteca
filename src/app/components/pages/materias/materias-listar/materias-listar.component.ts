import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from 'src/app/interfaces/materia.model';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-materias-listar',
  templateUrl: './materias-listar.component.html',
  styleUrls: ['./materias-listar.component.css']
})
export class MateriasListarComponent implements OnInit {


  listadoMaterias:Materia[]=[];
  constructor(
    private ruteador: Router,
    private servicioMaterias:MateriaService,
  ){}

  ngOnInit(): void {
    this.cargarMaterias();
    
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


}
