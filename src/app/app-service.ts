import { ChartPanelData, Widget } from './interfaces';
import { SeriesOptionsType, Options } from 'highcharts';
import { appStore, AppStore } from './store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private state: ChartPanelData[] = null;
  private lastSavedState = null;

  private lastId = 0;

  constructor() {}

  public getCurrentValue(name): ChartPanelData[] {
    return appStore.getValue(name);
  }

  public saveCurrentState(): void {
    this.lastSavedState = appStore.getValue('chartPanels');
    appStore.set('chartsChanged', false);
  }

  public restoreLastSavedState(): void {
    appStore.set('chartPanels', this.lastSavedState);
    appStore.set('chartsChanged', false);
  }

  public addChart(chartType: string): void {
    const chartData = this.generateChartData(chartType);
    appStore.set('chartPanels', [
      ...(appStore.getValue('chartPanels') || []),
      chartData,
    ]);

    appStore.set('chartsChanged', true);
  }

  public updateCharts(charts: ChartPanelData[]): void {
    appStore.set('chartPanels', charts);
    if (this.lastSavedState === charts) {
      appStore.set('chartsChanged', false);
    } else {
      appStore.set('chartsChanged', true);
    }
  }

  public destroy(): void {
    appStore.destroy();
  }

  private generateChartData(chartType: string): ChartPanelData {
    const len = Math.floor(Math.random() * 50) + 3;
    const data = Array.from({ length: len }, () =>
      Math.floor(Math.random() * len)
    );
    const chartOpts: Options = {
      series: [
        {
          data,
        } as SeriesOptionsType,
      ],
      chart: {
        type: chartType,
      },
      title: {
        text: chartType + 'Chart',
      },
    };
    return {
      id: this.lastId++,
      chartOptions: chartOpts,
      widget: {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        wSm: 1,
        hSm: 1,
        wMd: 1,
        hMd: 1,
        wLg: 1,
        hLg: 1,
        wXl: 1,
        hXl: 1,
        collapsed: false,
      },
    };
  }
}
