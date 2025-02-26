import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  //debugger;
  const token = localStorage.getItem('token') || "";

  const ruteador = inject(Router);

  if(token != ""){
    return true;

  }else{
    const url = ruteador.createUrlTree([""]);
    return url;
  }
  



  



};
