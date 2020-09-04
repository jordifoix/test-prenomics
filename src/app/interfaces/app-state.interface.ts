import { ChartPanelData } from './chart-panel-data.interface';

export interface AppState {
  chartPanels: ChartPanelData[];
  lastSavedState: ChartPanelData[];
  chartsChanged: boolean;
}
