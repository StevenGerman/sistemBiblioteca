import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../interfaces/materia.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  apiUrl: string = "http://localhost/newAPIBiblioteca/materias.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerMaterias():Observable<Materia[]>{
    return this.clienteHttp.get<Materia[]>(this.apiUrl);
  }

}
