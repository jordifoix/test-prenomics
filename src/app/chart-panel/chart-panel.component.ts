import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartPanelComponent implements AfterViewInit {
  @Input() private id: number;
  @Input() public chartOptions: Highcharts.Options;
  @Input() set sizeChange(widgetChanged: any) {
    if (this.chart && widgetChanged.id === this.id) {
      this.chart.reflow();
    }
  }

  public get identifier(): string {
    return `chart-container-${this.id}`;
  }

  private chart: Highcharts.Chart;
  public Highcharts: typeof Highcharts;

  constructor() {}

  public ngAfterViewInit(): void {
    this.chart = Highcharts.chart(this.identifier, this.chartOptions);
  }

  public chartCallback: Highcharts.ChartCallbackFunction = function(chart) {
    console.log(chart);
  };

  public updateSize(): void {
    this.chart.reflow();
  }
}
