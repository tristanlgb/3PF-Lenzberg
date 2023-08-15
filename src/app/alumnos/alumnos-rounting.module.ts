import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';




const routes: Routes = [
  {
    path:'',
      children:[
    {path:'tabla', component: TablaAlumnosComponent},
    {path:'editar', component: EditarAlumnosComponent},
    {path:'agregar', component: AgregarAlumnosComponent},


  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRountingModule { }

