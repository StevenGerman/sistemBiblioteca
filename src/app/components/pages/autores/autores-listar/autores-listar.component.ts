import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/interfaces/autor.model';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autores-listar',
  templateUrl: './autores-listar.component.html',
  styleUrls: ['./autores-listar.component.css']
})
export class AutoresListarComponent implements OnInit{

  listadoAutores:Autor[] = [];

  constructor(
    private ruteador:Router,
    private servicioAutores:AutorService,

  ){}

  ngOnInit(): void {
    this.cargarAutores();
  }

  cargarAutores(){
    this.servicioAutores.obtenerAutores().subscribe((respuesta)=>{
      console.log(respuesta);
      this.listadoAutores = respuesta;
    })
  }

  eliminarAutor(idAutor:any){
    this.servicioAutores.eliminaraAutor(idAutor).subscribe((respuesta)=>{
      console.log(respuesta);
      this.cargarAutores();
    })
  }



}
