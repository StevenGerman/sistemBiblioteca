import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../interfaces/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  apiUrl : string = "http://localhost/newAPIBiblioteca/roles.php";

  constructor(private clienteHttp:HttpClient) { }

  obtenerRoles():Observable<Rol[]>{
    return this.clienteHttp.get<Rol[]>(this.apiUrl);
  }

}
