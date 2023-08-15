import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import { selectAuthState, selectSesionState } from 'src/app/autenticacion/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authState: Store<AuthState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authState.select(selectSesionState).pipe(
      map((sesion: Sesion)=> {
        if(sesion.usuarioActivo?.esAdmin){
          return true;
        }else{

          this.router.navigate(['/cursos/card']);
          return false
        }
      })
    );
  }

}
