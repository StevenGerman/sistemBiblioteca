import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiUrl : string = "http://localhost/newAPIBiblioteca/personas.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerPersonas():Observable<Persona[]>{
    return this.clienteHttp.get<Persona[]>(this.apiUrl);
  }


}
