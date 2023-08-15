import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursosState from './cursos-state.reducer';

export const selectCursosState = createFeatureSelector<fromCursosState.CursoState>(
  fromCursosState.cursosStateFeatureKey
);
export const selectCargandoCursos = createSelector(
  selectCursosState,
  (state: fromCursosState.CursoState)=> state.cargando
);
export const selectCursosCargados = createSelector(
  selectCursosState,
  (state: fromCursosState.CursoState)=> state.cursos
)

