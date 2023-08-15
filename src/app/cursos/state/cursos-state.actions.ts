import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/curso';

export const cargarCursosState = createAction(
  '[CursosState] Cargar CursosStates'
);


export const cursosCargados = createAction(
  '[CursosState] Cursos cargados',
  props<{cursos: Curso[]}>()
)

