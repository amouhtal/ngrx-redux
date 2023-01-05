import { INCREMENT, DECREMENT } from '../actions/counter.action';
import { Counter, CustomeAction } from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

let initValue = {
  n: 0,
};

export function reduceCounter(state = initValue, action: CustomeAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        n: state.n + action.payload,
      };
    case DECREMENT:
      return {
        n: state.n - action.payload,
      };
    default:
      return state;
  }
}

const counterFS = createFeatureSelector<Counter>('counter');
export const nSelector = createSelector(counterFS, (state) => state.n);

