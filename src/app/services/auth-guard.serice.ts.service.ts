import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from  
 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean  
 | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.loginService.isAuthenticate();
    const rol = localStorage.getItem('Rol');  

    const requiredRole = route.data['role'];

    //console.log(`Rol cargado: ${rol}. Rol de la Ruta: ${requiredRole}. Autenticado: ${isAuthenticated}`);

    if (isAuthenticated) {
      if (rol == requiredRole)
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    return false
  }

}