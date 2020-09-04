import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'test';

  constructor(private appService: AppService) {}

  ngOnDestroy(): void {
    this.appService.destroy();
  }
}
