import { ChartPanelData } from './chart-panel-data.interface';

export interface AppState {
  chartPanels: ChartPanelData[];
  chartsChanged: boolean;
}
