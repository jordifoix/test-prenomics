import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridsterModule } from 'angular2gridster';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { ChartPanelComponent } from './chart-panel/chart-panel.component';
import { AppService } from './app-service';
import { AppStore } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    MenuComponent,
    GridComponent,
    ChartPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule.forRoot(),
    FlexLayoutModule,
    HighchartsChartModule,
  ],
  providers: [AppService, AppStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
