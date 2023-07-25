import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-health',
  templateUrl: './widget-health.component.html',
  styleUrls: ['./widget-health.component.css']
})
export class WidgetHealthComponent implements OnInit {
  Health = "data";
  constructor(){

  }
  ngOnInit(): void {
    
  }

  getHealth (){
    let data = "";
    this.setHealth(data);
  }
  setHealth (data: string) {
    this.Health =data;
  }
}
