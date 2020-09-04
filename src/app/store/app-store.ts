import { Store } from './store';
import { AppState } from '../interfaces';

export class AppStore extends Store<AppState> {
  constructor() {
    super({ chartPanels: [], lastSavedState: [], chartsChanged: false });
  }
}

export const appStore = new AppStore();
