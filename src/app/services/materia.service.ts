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

  obtenerMateriaID():Observable<Materia>{
    return this.clienteHttp.get<Materia>(this.apiUrl);
  }

    agregarMateria(datosMateria:Materia):Observable<any>{
      return this.clienteHttp.post(this.apiUrl,datosMateria);
    }
  
    editarEditorial(datosMateria:Materia){
      return this.clienteHttp.put(this.apiUrl,datosMateria);
    }
  
    eliminarEditorial(idMateria:any):Observable<any>{
      return this.clienteHttp.delete(`${this.apiUrl}?idMateria=${idMateria}`);
    }



}
