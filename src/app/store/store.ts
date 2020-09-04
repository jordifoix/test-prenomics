import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';

export class Store<StoreState> {
  private readonly _subject: BehaviorSubject<StoreState>;
  private readonly _store: Observable<StoreState>;
  private readonly _defaultState: StoreState;

  constructor(defaultState: StoreState) {
    this._defaultState = defaultState;
    this._subject = new BehaviorSubject<StoreState>(defaultState);
    this._store = this._subject.asObservable().pipe(distinctUntilChanged());
  }

  getValue<K extends keyof StoreState>(name: K): StoreState[K] {
    return this._subject.getValue()[name];
  }

  select<K extends keyof StoreState>(name: K): Observable<StoreState[K]> {
    return this._store.pipe(pluck(name));
  }

  set<K extends keyof StoreState>(name: K, state: StoreState[K]): void {
    // FIXME: To trigger angular "change detection on push", immutability is needed.
    //  Maybe it will be better to use a helper library to achieve it:
    //      - Immer (https://immerjs.github.io/immer/docs/introduction).
    //      - See this for more options: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
    if (name === 'chartsChanged') {
      console.log('chartsChanged set to: ' + state);
    }
    this._subject.next({
      ...this._subject.getValue(),
      [name]: cloneDeep(state),
    });
  }

  destroy(): void {
    this._subject.next(this._defaultState);
  }
}
