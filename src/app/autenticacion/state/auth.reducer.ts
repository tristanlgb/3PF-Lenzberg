import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { Sesion } from 'src/app/models/sesion';

export const authFeatureKey = 'auth';

export interface AuthState {
  sesion: Sesion
}

export const initialState: AuthState = {
 sesion: {
  sesionActiva: false
 }
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.cargarSesion, (state, {sesion}) => {
    return{... state, sesion: {sesionActiva:true, usuarioActivo:sesion.usuarioActivo}}
  }),

);



