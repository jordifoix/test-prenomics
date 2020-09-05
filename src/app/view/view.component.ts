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
})
export class ViewComponent {
  public data$: Observable<ChartPanelData[]> = appStore.select('chartPanels');
  public chartsChanged$: Observable<boolean> = appStore.select('chartsChanged');

  constructor() {}
}
