import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetHealthComponent } from './component/widget-health/widget-health.component';
import { WidgetMapComponent } from './component/widget-map/widget-map.component';
import { WidgetHoroscopeComponent } from './component/widget-horoscope/widget-horoscope.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WidgetHealthComponent,
    WidgetMapComponent,
    WidgetHoroscopeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
