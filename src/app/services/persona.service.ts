import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlApi : string = "http://localhost/newAPIBiblioteca/personas.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerPersonas():Observable<Persona[]>{
    return this.clienteHttp.get<Persona[]>(this.urlApi);
  }

  obtenerPersonaID(idPersona:any):Observable<Persona>{
     return this.clienteHttp.get<Persona>(`${this.urlApi}?idPersona=${idPersona}`);
      }
    
        agregarPersona(datosPersona:Persona):Observable<any>{
          return this.clienteHttp.post(this.urlApi,datosPersona);
        }
      
        editarPersona(datosPersona:Persona){
          return this.clienteHttp.put(this.urlApi,datosPersona);
        }
      
        eliminarPersona(idPersona:any):Observable<any>{
          return this.clienteHttp.delete(`${this.urlApi}?idPersona=${idPersona}`);
        }


}
