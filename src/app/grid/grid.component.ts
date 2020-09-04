import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { ChartPanelData } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from '../app-service';
import * as gridsterOptions from '../gridster-options';
import { map } from 'highcharts';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() set charts(value: ChartPanelData[]) {
    this._charts = value;
  }

  get charts(): ChartPanelData[] {
    return this._charts;
  }

  constructor(private appService: AppService) {}
  private readonly widgetSizeChange = new BehaviorSubject<any>({ id: -1 });
  public readonly widgetSizeChange$ = this.widgetSizeChange.asObservable();
  public gridsterOptions = gridsterOptions;
  private _charts: ChartPanelData[];
  public deleteChart(chartId: number): void {
    console.log('chart to be deleted: ' + chartId);
    this.appService.updateCharts(
      this.charts.filter((chart) => chart.id !== chartId)
    );
  }

  public widgetChange(event, chart: ChartPanelData): void {
    console.log('widgetChange!');
    console.log(this.charts);
    console.log(event);
    requestAnimationFrame(() => {
      console.log('aftertimeout:');
      console.log(this.charts);
      // TODO: Aquest map no soluciona l'error de que els widgets no persisteixen els canvis al store
      const newCharts = map(this.charts, (chartData) => {
        return {
          ...chartData,
          widget:
            chartData.id === chart.id
              ? {
                  ...chartData.widget,
                  x: event.item.x,
                  y: event.item.y,
                  w: event.item.w,
                  h: event.item.h,
                }
              : chartData.widget,
        };
      });
      console.log('newCharts:');
      console.log(newCharts);
      if (event.changes.includes('x') || event.changes.includes('y')) {
        console.log('canvi en posició');
      }
      if (event.changes.includes('w') || event.changes.includes('h')) {
        console.log('canvi en forma');
        this.widgetSizeChange.next({ id: chart.id });
      }
      this.appService.updateCharts(newCharts);
    });
  }

  public trackByFn(index, item) {
    return item.id;
  }
}
