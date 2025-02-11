import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  apiUrl : string = "http://localhost/newAPIBiblioteca/libros.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerLibros():Observable<Libro[]>{
    return this.clienteHttp.get<Libro[]>(this.apiUrl);
  }

  agregarLibro(datosLibro:Libro):Observable<any>{
    return this.clienteHttp.post(this.apiUrl,datosLibro);
  }

  editarLibro(datosLibro:Libro){
    this.clienteHttp.put(this.apiUrl,datosLibro);
  }

  eliminarLibro(idLibro:number):any{
    this.clienteHttp.delete(`${this.apiUrl}?idLibro=${idLibro}`);
  }
















}
