import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  apiUrl : string = "http://localhost/newAPIBiblioteca/registro.php";


  constructor(private clienteHttp:HttpClient) { }


  agregarRegistro(datosPersona: Persona): Observable<any>{
    return this.clienteHttp.post(this.apiUrl,datosPersona);
  }

}
