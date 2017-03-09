import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.css']
})
export class WeatherDayComponent implements OnInit {
  @Input() day;
  
  constructor() { }

  ngOnInit() {
  }

}
