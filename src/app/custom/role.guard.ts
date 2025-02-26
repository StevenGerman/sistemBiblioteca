import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {

  debugger;
 const ruteador = inject(Router);

  const rol = localStorage.getItem('rolNombre');
  console.log(rol);
  if (rol === 'Bibliotecario') { // Los roles que pueden acceder
    return true;
  } else {
    ruteador.navigate(['/acceso-denegado']); // Redirigir a página de acceso denegado si el rol no es adecuado
    return false;
  }


};
