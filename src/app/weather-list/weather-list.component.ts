import { Component, OnInit, Input } from '@angular/core';
import { OpenweathermapService } from "../services/openweathermap.service"

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  @Input() 
  set city(val: string) {
      this.getWeatherData(val);
  }

  weatherData:any;

  private getWeatherData(city:string): void {
    this.dataService.get(city).then(response => this.weatherData = response.list);
  }
 
  constructor(private dataService: OpenweathermapService) { }
}