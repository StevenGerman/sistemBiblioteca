import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from '../interfaces/editorial.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  urlApi: string = 'http://localhost/newAPIBiblioteca/editoriales.php';

  constructor(private clienteHttp:HttpClient) { }

  obtenerEditoriales():Observable<Editorial[]>{
    return this.clienteHttp.get<Editorial[]>(this.urlApi);
  }

  agregarEditorial(datosEditorial:Editorial):Observable<any>{
    return this.clienteHttp.post(this.urlApi,datosEditorial);
  }

  eliminarEditorial(idEditorial:any):Observable<any>{
    return this.clienteHttp.delete(`${this.urlApi}?idEditorial=${idEditorial}`);
  }

}
