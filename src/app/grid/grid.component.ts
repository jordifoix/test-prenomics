import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { ChartPanelData } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from '../app-service';
import * as gridsterOptions from '../gridster-options';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  private readonly widgetSizeChange = new BehaviorSubject<any>({ id: -1 });
  public readonly widgetSizeChange$ = this.widgetSizeChange.asObservable();
  public gridsterOptions = gridsterOptions;
  private _charts: ChartPanelData[];

  @Input() set charts(value: ChartPanelData[]) {
    console.log(value);
    this._charts = value;
  }

  get charts(): ChartPanelData[] {
    return this._charts;
  }

  constructor(private appService: AppService) {
    // this.charts = this.appService.data$;
  }

  public deleteChart(chartId: number): void {
    let newCharts = [];
    if (this.charts.length > 1) {
      newCharts = this.charts.filter((chart) => chart.id === chartId);
    }
    console.log('id del element: ' + chartId);
    console.log('array sense element:');
    console.log(newCharts);
    this.appService.updateCharts(newCharts);
  }

  public widgetChange(event, chart: ChartPanelData): void {
    console.log(this.charts);
    this.appService.updateCharts(this.charts);
    if (event.changes.includes('w') || event.changes.includes('h')) {
      this.widgetSizeChange.next({ id: chart.id });
    }

    // if (event && !event.isNew) {
    //   if (event.changes.includes('w') || event.changes.includes('h')) {
    //     this.widgetSizeChange.next({ id: chart.id });
    //   }
    //   if (
    //     event.changes.includes('x') ||
    //     event.changes.includes('y') ||
    //     event.changes.includes('w') ||
    //     event.changes.includes('h') ||
    //     event.changes.includes('wSm') ||
    //     event.changes.includes('hSm') ||
    //     event.changes.includes('wMd') ||
    //     event.changes.includes('hMd') ||
    //     event.changes.includes('wLg') ||
    //     event.changes.includes('hLg') ||
    //     event.changes.includes('wXl') ||
    //     event.changes.includes('hXl')
    //   ) {
    //     const newChart = cloneDeep(chart);
    //     newChart.widget = {
    //       x: event.item.itemComponent.x,
    //       y: event.item.itemComponent.y,
    //       w: event.item.itemComponent.w,
    //       h: event.item.itemComponent.h,
    //       wSm: event.item.itemComponent.wSm,
    //       hSm: event.item.itemComponent.hSm,
    //       wMd: event.item.itemComponent.wMd,
    //       hMd: event.item.itemComponent.hMd,
    //       wLg: event.item.itemComponent.wLg,
    //       hLg: event.item.itemComponent.hLg,
    //       wXl: event.item.itemComponent.wXl,
    //       hXl: event.item.itemComponent.hXl,
    //       collapsed: false,
    //     };
    //     this.appService.changeChart(newChart);
    //   }
    // }
  }

  public trackByFn(index, _): number {
    return index; // or item.id
  }
}
