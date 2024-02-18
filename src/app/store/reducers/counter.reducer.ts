import { createReducer, on } from '@ngrx/store';
import { decrease, increase, reset, changeUpdatedAt } from '../actions/counter.actions';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const COUNTER_KEY = 'counter';

export interface CounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: CounterState = {
  count: 0,
};

export interface State {
  [COUNTER_KEY]: CounterState;
}


export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(reset, (state) => ({
    ...state,
    count: 0,
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt,
  }))
);

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export { reset, changeUpdatedAt, decrease, increase };

