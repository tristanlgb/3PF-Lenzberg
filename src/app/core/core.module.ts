import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedRoutingModule } from '../shared/shared-routing.module';
import { MaterialModule } from '../material.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InicioComponent,
    NoEncontradoComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedRoutingModule,
    MaterialModule,
    HttpClientModule

  ],
  exports: [
    InicioComponent,
    NoEncontradoComponent,
    CommonModule,
    CoreRoutingModule,
    SharedRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class CoreModule { }
