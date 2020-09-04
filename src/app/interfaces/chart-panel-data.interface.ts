import { Widget } from './widget.interface';

export interface ChartPanelData {
  id: number;
  chartOptions: Highcharts.Options;
  widget: Widget;
}
