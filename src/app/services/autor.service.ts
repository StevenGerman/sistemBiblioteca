import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interfaces/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  apiUrl : string = "http://localhost/newAPIBiblioteca/autores.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerAutores():Observable<Autor[]>{
    return this.clienteHttp.get<Autor[]>(this.apiUrl);
  }

}
