import { Store } from './store';
import { AppState } from '../interfaces';

export class AppStore extends Store<AppState> {
  constructor() {
    super({ chartPanels: null, lastSavedState: null, chartsChanged: false });
  }
}

export const appStore = new AppStore();
