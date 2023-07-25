import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-widget-horoscope',
  templateUrl: './widget-horoscope.component.html',
  styleUrls: ['./widget-horoscope.component.css']
})
export class WidgetHoroscopeComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.apiService.fetchData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
