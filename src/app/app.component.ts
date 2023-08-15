import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from './models/sesion';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { AuthState } from './autenticacion/state/auth.reducer';
import { Store } from '@ngrx/store';
import { Usuario } from './models/usuario';
import { selectSesionActiva, selectUsuarioActivo } from './autenticacion/state/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;
  constructor(
    private router: Router,
    private sesion: SesionService,
    private authStore: Store<AuthState>
){}
  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }
  logout(){
    let sesionLogout: Sesion = {
      sesionActiva:false,
      usuarioActivo: undefined
    };
    this.sesion.logout(sesionLogout);
    this.router.navigate(['/auth/login'])
  }
  inicio(){
    this.router.navigate(['inicio'])

  }
}
