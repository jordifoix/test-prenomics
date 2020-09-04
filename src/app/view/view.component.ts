import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ChartPanelData } from '../interfaces';
import { Observable } from 'rxjs';
import { appStore } from '../store';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComponent {
  private lastSavedState: ChartPanelData[] = [];

  public data$: Observable<ChartPanelData[]> = appStore.select('chartPanels');
  public chartsChanged$: Observable<boolean> = appStore.select('chartsChanged');

  constructor() {}
}
