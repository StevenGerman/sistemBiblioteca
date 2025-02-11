import { Component, OnInit } from '@angular/core';
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



}
