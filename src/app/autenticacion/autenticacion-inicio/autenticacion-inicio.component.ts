import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacion-inicio',
  templateUrl: './autenticacion-inicio.component.html',
  styleUrls: ['./autenticacion-inicio.component.css']
})
export class AutenticacionInicioComponent {
 constructor(
  private router: Router
 ){}
}
