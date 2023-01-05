export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';

export class IncrementAction {
  type: string = INCREMENT;
  payload: number;

  constructor(payload: number = 0) {
    this.payload = payload;
  }
}

export class DecrementAction {
  type: string = DECREMENT;
  payload: number;

  constructor(payload: number = 0) {
    this.payload = payload;
  }
}
