import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { changeUpdatedAt, reset, decrease, increase } from '../../store/reducers/counter.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, reset, changeUpdatedAt),
      map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    )
  );

  constructor(private actions$: Actions) {}
}
