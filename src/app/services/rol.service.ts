import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../interfaces/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  urlApi : string = "http://localhost/newAPIBiblioteca/roles.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerRoles():Observable<Rol[]>{
    return this.clienteHttp.get<Rol[]>(this.urlApi);
  }


  obtenerRolID():Observable<Rol>{
        return this.clienteHttp.get<Rol>(this.urlApi);
      }
    
        agregarRol(datosRol:Rol):Observable<any>{
          return this.clienteHttp.post(this.urlApi,datosRol);
        }
      
        editarEditorial(datosRol:Rol){
          return this.clienteHttp.put(this.urlApi,datosRol);
        }
      
        eliminarEditorial(idRol:any):Observable<any>{
          return this.clienteHttp.delete(`${this.urlApi}?idRol=${idRol}`);
        }

}
