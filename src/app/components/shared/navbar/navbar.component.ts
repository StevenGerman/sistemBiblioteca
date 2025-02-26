import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  isLoggedIn: boolean = false;

  constructor(private servicioLogin:LoginService, private ruteador : Router){

  }

  ngOnInit(): void {
    // Detectar cuando el usuario navega y actualizar estado
    this.ruteador.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = this.servicioLogin.estaAutenticado();
      }
    });

  }


  logOut(){
    this.servicioLogin.logout();
    this.isLoggedIn = false;
  }
}
