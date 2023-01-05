import { ActionReducerMap } from '@ngrx/store';
import { reduceCounter } from './reducers/counter.reducer';

export interface StoreInterface {
  counter: Counter;
}
export interface Counter {
  n: number;
}

export interface CustomeAction {
  type: string;
  payload?: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  counter: reduceCounter,
};
