import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IncrementAction,
  DecrementAction,
} from './store/actions/counter.action';
import { nSelector } from './store/reducers/counter.reducer';
import { Counter, StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count: number = 0;

  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe((data) => {
      this.count = data;
    });
  }
  increment() {
    this.store.dispatch(new IncrementAction(1));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(2));
  }
}
