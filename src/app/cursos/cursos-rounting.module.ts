import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { DetalleCursosComponent } from './components/detalle-cursos/detalle-cursos.component';



const routes: Routes = [
  {
    path:'',
      children:[
    {path:'editar', component: CursoEditarComponent},
    {path:'card', component: CursosCardComponent },
    {path:'agregar', component: CursosAgregarComponent},
    {path:'detalle', component: DetalleCursosComponent},

  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
