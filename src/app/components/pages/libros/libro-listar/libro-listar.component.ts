import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro.model';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-listar',
  templateUrl: './libro-listar.component.html',
  styleUrls: ['./libro-listar.component.css']
})
export class LibroListarComponent implements OnInit{

  listadoLibros:Libro[]= [];

  constructor(

    private servicioLibros: LibroService,
  ){
    this.cargarLibros();
  }


  ngOnInit(): void {
    
  }

  cargarLibros(){
    this.servicioLibros.obtenerLibros().subscribe((respuesta)=>{
      console.log(respuesta);
      this.listadoLibros = respuesta;
    })
  }

}
