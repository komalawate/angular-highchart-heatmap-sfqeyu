import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHCHARTS_MODULES, ChartModule } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
import highmaps from 'highcharts/modules/map.src';

export function highchartsModules() { 
  // apply Highcharts Modules to this array
  return [ more, exporting, highmaps];
}

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, ChartModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ]
})
export class AppModule { }
