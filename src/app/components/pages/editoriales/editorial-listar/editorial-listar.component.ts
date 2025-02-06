import { Component, OnInit } from '@angular/core';
import { Editorial, EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-listar',
  templateUrl: './editorial-listar.component.html',
  styleUrls: ['./editorial-listar.component.css']
})
export class EditorialListarComponent implements OnInit{

  Editoriales:Editorial[] = [];
  constructor(public servicioEditoriales: EditorialService){}

  ngOnInit(): void {
    this.cargarEditoriales();
    
  }
  cargarEditoriales(){
    this.servicioEditoriales.obtenerEditoriales().subscribe((respuesta)=>{
      console.log(respuesta);
      this.Editoriales = respuesta;
    })
  }

}
