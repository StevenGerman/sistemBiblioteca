import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.clienteHttp.get<Materia[]>(this.apiUrl,{ headers });
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
