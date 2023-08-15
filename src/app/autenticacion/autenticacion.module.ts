import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuntenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionInicioComponent } from './autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, reducer } from './state/auth.reducer';



@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuntenticacionRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, reducer)

  ]
})
export class AutenticacionModule { }
