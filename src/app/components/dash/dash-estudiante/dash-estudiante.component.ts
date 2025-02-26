import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona.model';
import { LibroService } from 'src/app/services/libro.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-dash-estudiante',
  templateUrl: './dash-estudiante.component.html',
  styleUrls: ['./dash-estudiante.component.css']
})
export class DashEstudianteComponent implements OnInit{

  idPersona: string | null = "1";
  persona: Persona = { perApellido: "", perContrasena: "", perDni: "", perNombre: "" };

  constructor(
    private ruteador: Router,
    private servicioPersonas:PersonaService,
    private serivicioLogin:LoginService,
    private servicioLibros:LibroService,
  ){}

  ngOnInit():void{
    this.cargarDatosPersonales();
  }
    



  cargarDatosPersonales() {
    this.idPersona = this.serivicioLogin.obtenerIdPersona();
    console.log(this.idPersona);
    if (this.idPersona) {
      this.servicioPersonas.obtenerPersonaID(this.idPersona).subscribe((respuesta) => {
        console.log(respuesta);
        console.log(respuesta.perNombre);
        this.persona.idPersona = respuesta.idPersona;
        this.persona.perNombre = respuesta.perNombre;
        this.persona.perApellido = respuesta.perApellido;
        this.persona.perDni = respuesta.perDni;
        this.persona.perContrasena = respuesta.perContrasena;
      }, (error) => {
        console.error("Error al obtener los datos de la persona", error);
      });

    }
  }
  editarPersona(idPersona:any){
    
   /* this.servicioPersonas.editarPersona(idPersona).subscribe((respuesta)=>{
      console.log(respuesta);
    })*/
  }
  logout(){
    this.serivicioLogin.logout();
  }


}

