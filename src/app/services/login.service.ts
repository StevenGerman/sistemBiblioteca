import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApi: string = "http://localhost/newAPIBiblioteca/login.php"

  constructor(private clienteHttp:HttpClient, private ruteador : Router) { }

  
  LoginUser(objeto:any):Observable<any>{
    return this.clienteHttp.post(this.urlApi,objeto);
  }

  guardarToken(token: string): void {
    localStorage.setItem('token', token);
    //localStorage.setItem('rolNombre', rolNombre);
    
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }
  obtenerRol(): string | null {
    return localStorage.getItem('rolNombre');
  }

  estaAutenticado(): boolean {
    return this.obtenerToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rolNombre');
    this.ruteador.navigate(['login']);
  }



}
