import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Editorial{
  idEditorial?: String;
  ediNombre: String;
  ediDireccion: String;
  ediTelefono: String;
  ediEmail: String;
}

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  urlApi: string = 'http://localhost/newAPIBiblioteca/editoriales.php';

  constructor(private clienteHttp:HttpClient) { }

  obtenerEditoriales():Observable<Editorial[]>{
    return this.clienteHttp.get<Editorial[]>(this.urlApi);
  }


}
