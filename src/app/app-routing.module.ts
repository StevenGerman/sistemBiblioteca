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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'editorial-listar', component: EditorialListarComponent},
  {path: 'editorial-agregar', component: EditorialAgregarComponent},
  {path: 'editorial-editar/:id', component: EditorialEditarComponent},

  {path: 'rol-listar', component: RolesListarComponent},
  {path: 'rol-agregar', component: RolesAgregarComponent },
  {path: 'rol-editar', component: RolesEditarComponent},

  {path: 'libro-listar', component: LibroListarComponent},
  {path: 'libro-agregar', component: LibroAgregarComponent},
  {path: 'libro-editar', component: LibroEditarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
