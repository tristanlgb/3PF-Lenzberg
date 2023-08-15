import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { MaterialModule } from '../material.module';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosRountingModule } from './cursos-rounting.module';
import { CursosService } from './services/curso.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { BooleanoATextoPipe } from './pipes/booleano-atexto.pipe';
import { DetalleCursosComponent } from './components/detalle-cursos/detalle-cursos.component';
import { StoreModule } from '@ngrx/store';
import { cursosStateFeatureKey, reducer } from './state/cursos-state.reducer';
import { FechaFormatoPipe } from './pipes/fecha-formato.pipe';





@NgModule({
  declarations: [
    CursosCardComponent,
    CursoEditarComponent,
    CursosAgregarComponent,
    DetalleCursosComponent,
    BooleanoATextoPipe,
    FechaFormatoPipe

  ],
  imports: [
    CommonModule,
    CursosRountingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(cursosStateFeatureKey, reducer)

  ],
  providers: [
    CursosService
  ]

})
export class CursosModule { }
