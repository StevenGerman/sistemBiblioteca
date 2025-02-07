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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditorialListarComponent,
    EditorialAgregarComponent,
    EditorialEditarComponent,
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
