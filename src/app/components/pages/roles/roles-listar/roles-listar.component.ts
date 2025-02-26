import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol.model';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-roles-listar',
  templateUrl: './roles-listar.component.html',
  styleUrls: ['./roles-listar.component.css']
})
export class RolesListarComponent implements OnInit {


  listadoRoles:Rol[]= []
  
  constructor(

    private servicioRoles:RolService,
    
  ){
    this.cargarRoles();
  }

  ngOnInit(){
    
  }

  cargarRoles(){
    this.servicioRoles.obtenerRoles().subscribe((respuesta)=>{
      console.log(respuesta);
      this.listadoRoles = respuesta;
    })
  }

  eliminarRol(idRol:any){
    
  }

}
