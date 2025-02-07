import { Component, OnInit } from '@angular/core';
import { EditorialService } from 'src/app/services/editorial.service';
import { Editorial } from 'src/app/interfaces/editorial.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial-listar',
  templateUrl: './editorial-listar.component.html',
  styleUrls: ['./editorial-listar.component.css']
})
export class EditorialListarComponent implements OnInit{

  Editoriales:Editorial[] = [];
  constructor(public servicioEditoriales: EditorialService,private ruteador: Router){
    
  }

  ngOnInit(): void {
    this.cargarEditoriales();
    
  }
  cargarEditoriales(){
    this.servicioEditoriales.obtenerEditoriales().subscribe((respuesta)=>{
      console.log(respuesta);
      this.Editoriales = respuesta;
    })
  }

  eliminarEditorial(idEditorial:any | undefined){
    console.log(idEditorial);
    if(idEditorial !=undefined){
      this.servicioEditoriales.eliminarEditorial(idEditorial).subscribe((respuesta)=>{
        console.log(respuesta);
        this.cargarEditoriales();
      })
    }
    
    
    this.ruteador.navigateByUrl('editorial-listar');

  }

}
