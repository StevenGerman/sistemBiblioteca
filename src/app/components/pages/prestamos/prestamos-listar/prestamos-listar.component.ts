import { Component, OnInit } from '@angular/core';
import { Prestamo } from 'src/app/interfaces/prestamo.model';
import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-prestamos-listar',
  templateUrl: './prestamos-listar.component.html',
  styleUrls: ['./prestamos-listar.component.css']
})
export class PrestamosListarComponent implements OnInit{

  listadoPrestamos:Prestamo[]=[];


  constructor(

    private servicioPrestamos:PrestamoService
  ){
    this.cargarPrestamos();
  }

  ngOnInit(): void {
    
  }

  cargarPrestamos(){
    this.servicioPrestamos.obtenerPrestamos().subscribe((respuesta)=>{
      console.log(respuesta);
      this.listadoPrestamos = respuesta;
    })
  }


}
