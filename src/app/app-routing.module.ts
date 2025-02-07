import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EditorialListarComponent } from './components/pages/editoriales/editorial-listar/editorial-listar.component';
import { EditorialAgregarComponent } from './components/pages/editoriales/editorial-agregar/editorial-agregar.component';
import { EditorialEditarComponent } from './components/pages/editoriales/editorial-editar/editorial-editar.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'editorial-listar', component: EditorialListarComponent},
  {path: 'editorial-agregar', component: EditorialAgregarComponent},
  {path: 'editorial-editar:id', component: EditorialEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
