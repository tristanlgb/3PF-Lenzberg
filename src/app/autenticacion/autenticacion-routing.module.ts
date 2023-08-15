import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionInicioComponent } from './autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: AutenticacionInicioComponent, children: [
    {path: 'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuntenticacionRoutingModule { }
