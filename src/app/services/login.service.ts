import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApi: string = "http://localhost/newAPIBiblioteca/login.php"

  constructor(private clienteHttp:HttpClient) { }

  
  LoginUser(objeto:any):Observable<any>{
    return this.clienteHttp.post(this.urlApi,objeto);
  }



}
