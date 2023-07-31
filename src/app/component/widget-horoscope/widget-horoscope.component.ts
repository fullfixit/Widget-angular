import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-widget-horoscope',
  templateUrl: './widget-horoscope.component.html',
  styleUrls: ['./widget-horoscope.component.css']
})
export class WidgetHoroscopeComponent implements OnInit {
  meteo: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getData().subscribe()
  }
}
