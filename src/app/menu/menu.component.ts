import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  public saveDisabled = false;
  public restoreDisabled = false;

  private _sessionButtonsEnabled: boolean;

  @Input() set sessionButtonsEnabled(value: boolean) {
    this._sessionButtonsEnabled = value;
  }

  get sessionButtonsEnabled(): boolean {
    return this._sessionButtonsEnabled;
  }

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  createChart(chartOpt: string): void {
    this.appService.addChart(chartOpt);
  }

  saveState(): void {
    this.appService.saveCurrentState();
  }
  restoreLastSavedState(): void {
    this.appService.restoreLastSavedState();
  }
}
