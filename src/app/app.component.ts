import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset, decrease, increase } from '../app/store/actions/counter.actions';
import { updatedAtSelector } from '../app/store/selectors/counter.selectors';
import { countSelector } from './store/selectors/counter.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {}

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
