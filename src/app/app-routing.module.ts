import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EditorialListarComponent } from './components/pages/editoriales/editorial-listar/editorial-listar.component';
import { EditorialAgregarComponent } from './components/pages/editoriales/editorial-agregar/editorial-agregar.component';
import { EditorialEditarComponent } from './components/pages/editoriales/editorial-editar/editorial-editar.component';
import { RolesListarComponent } from './components/pages/roles/roles-listar/roles-listar.component';
import { RolesEditarComponent } from './components/pages/roles/roles-editar/roles-editar.component';
import { RolesAgregarComponent } from './components/pages/roles/roles-agregar/roles-agregar.component';
import { LibroListarComponent } from './components/pages/libros/libro-listar/libro-listar.component';
import { LibroAgregarComponent } from './components/pages/libros/libro-agregar/libro-agregar.component';
import { LibroEditarComponent } from './components/pages/libros/libro-editar/libro-editar.component';
import { PersonaListarComponent } from './components/pages/personas/persona-listar/persona-listar.component';
import { PersonaAgregarComponent } from './components/pages/personas/persona-agregar/persona-agregar.component';
import { PersonaEditarComponent } from './components/pages/personas/persona-editar/persona-editar.component';
import { PrestamosListarComponent } from './components/pages/prestamos/prestamos-listar/prestamos-listar.component';
import { PrestamosAgregarComponent } from './components/pages/prestamos/prestamos-agregar/prestamos-agregar.component';
import { PrestamosEditarComponent } from './components/pages/prestamos/prestamos-editar/prestamos-editar.component';
import { AutoresListarComponent } from './components/pages/autores/autores-listar/autores-listar.component';
import { MateriasListarComponent } from './components/pages/materias/materias-listar/materias-listar.component';
import { MateriasAgregarComponent } from './components/pages/materias/materias-agregar/materias-agregar.component';
import { MateriasEditarComponent } from './components/pages/materias/materias-editar/materias-editar.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { authGuard } from './custom/auth.guard';
import { NoaccesoComponent } from './components/pages/noacceso/noacceso/noacceso.component';
import { roleGuard } from './custom/role.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'acceso-denegado', component: NoaccesoComponent,canActivate:[authGuard]},

  {path: 'editorial-listar', component: EditorialListarComponent,canActivate:[authGuard]},
  {path: 'editorial-agregar', component: EditorialAgregarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'editorial-editar/:id', component: EditorialEditarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'rol-listar', component: RolesListarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'rol-agregar', component: RolesAgregarComponent ,canActivate:[authGuard,roleGuard]},
  {path: 'rol-editar', component: RolesEditarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'libro-listar', component: LibroListarComponent,canActivate:[authGuard]},
  {path: 'libro-agregar', component: LibroAgregarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'libro-editar', component: LibroEditarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'persona-listar', component: PersonaListarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'persona-agregar', component: PersonaAgregarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'persona-editar', component: PersonaEditarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'prestamo-listar', component: PrestamosListarComponent,canActivate:[authGuard]},
  {path: 'prestamo-agregar', component: PrestamosAgregarComponent,canActivate:[authGuard]},
  {path: 'prestamo-editar', component: PrestamosEditarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'autores-listar', component: AutoresListarComponent,canActivate:[authGuard]},
  {path: 'autores-agregar', component: AutoresListarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'autores-editar', component: AutoresListarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'materias-listar', component: MateriasListarComponent,canActivate:[authGuard]},
  {path: 'materias-agregar', component: MateriasAgregarComponent,canActivate:[authGuard,roleGuard]},
  {path: 'materias-editar', component: MateriasEditarComponent,canActivate:[authGuard,roleGuard]},

  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
