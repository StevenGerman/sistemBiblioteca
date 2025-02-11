import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../interfaces/prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  urlApi : string = "http://localhost/newAPIBiblioteca/prestamos.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerPrestamos():Observable<Prestamo[]>{
    return this.clienteHttp.get<Prestamo[]>(this.urlApi);
  }

  obtenerPrestamoID():Observable<Prestamo>{
      return this.clienteHttp.get<Prestamo>(this.urlApi);
    }
  
      agregarPrestamo(datosPrestamo:Prestamo):Observable<any>{
        return this.clienteHttp.post(this.urlApi,datosPrestamo);
      }
    
      editarEditorial(datosPrestamo:Prestamo){
        return this.clienteHttp.put(this.urlApi,datosPrestamo);
      }
    
      eliminarEditorial(idPrestamo:any):Observable<any>{
        return this.clienteHttp.delete(`${this.urlApi}?idPrestamo=${idPrestamo}`);
      }
  



}
