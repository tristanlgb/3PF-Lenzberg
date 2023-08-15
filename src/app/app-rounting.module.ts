import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
const routes: Routes = [
  { path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)},
  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule)},
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: '**', component: NoEncontradoComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRountingModule { }
