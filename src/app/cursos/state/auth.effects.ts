/* import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {


  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.loadAuths),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
     /* concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
 */
