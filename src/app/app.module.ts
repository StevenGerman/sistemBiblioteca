import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EditorialListarComponent } from './components/pages/editoriales/editorial-listar/editorial-listar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditorialAgregarComponent } from './components/pages/editoriales/editorial-agregar/editorial-agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorialEditarComponent } from './components/pages/editoriales/editorial-editar/editorial-editar.component';
import { LibroListarComponent } from './components/pages/libros/libro-listar/libro-listar.component';
import { LibroAgregarComponent } from './components/pages/libros/libro-agregar/libro-agregar.component';
import { LibroEditarComponent } from './components/pages/libros/libro-editar/libro-editar.component';
import { MateriasListarComponent } from './components/pages/materias/materias-listar/materias-listar.component';
import { MateriasEditarComponent } from './components/pages/materias/materias-editar/materias-editar.component';
import { MateriasAgregarComponent } from './components/pages/materias/materias-agregar/materias-agregar.component';
import { PersonaListarComponent } from './components/pages/personas/persona-listar/persona-listar.component';
import { PersonaEditarComponent } from './components/pages/personas/persona-editar/persona-editar.component';
import { PersonaAgregarComponent } from './components/pages/personas/persona-agregar/persona-agregar.component';
import { PrestamosListarComponent } from './components/pages/prestamos/prestamos-listar/prestamos-listar.component';
import { PrestamosAgregarComponent } from './components/pages/prestamos/prestamos-agregar/prestamos-agregar.component';
import { PrestamosEditarComponent } from './components/pages/prestamos/prestamos-editar/prestamos-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditorialListarComponent,
    EditorialAgregarComponent,
    EditorialEditarComponent,
    LibroListarComponent,
    LibroAgregarComponent,
    LibroEditarComponent,
    MateriasListarComponent,
    MateriasEditarComponent,
    MateriasAgregarComponent,
    PersonaListarComponent,
    PersonaEditarComponent,
    PersonaAgregarComponent,
    PrestamosListarComponent,
    PrestamosAgregarComponent,
    PrestamosEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
