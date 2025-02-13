import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listar',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona-listar.component.css']
})
export class PersonaListarComponent implements OnInit {

  listadoPersonas:Persona[] = [];

  constructor(
    
    private servicioPersonas: PersonaService
  ){
    this.cargarPersonas();

  }


  ngOnInit(): void {
    
  }

  cargarPersonas(){
    this.servicioPersonas.obtenerPersonas().subscribe((respuesta)=>{
      console.log(respuesta);
      this.listadoPersonas = respuesta;
    })
  }

  eliminarPersona(idPersona:any){
    this.servicioPersonas.eliminarPersona(idPersona).subscribe((respuesta)=>{
      console.log(respuesta);
      this.cargarPersonas();
    })
  }

}
