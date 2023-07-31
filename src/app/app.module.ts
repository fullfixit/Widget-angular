import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetHealthComponent } from './component/widget-health/widget-health.component';
import { WidgetHoroscopeComponent } from './component/widget-horoscope/widget-horoscope.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetHealthComponent,
    WidgetHoroscopeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
