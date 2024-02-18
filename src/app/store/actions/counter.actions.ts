import { createAction, props } from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const reset = createAction('[COUNTER] reset');
export const changeUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{ updatedAt: number }>()
);
