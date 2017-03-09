import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDayComponent } from './weather-day/weather-day.component';
import { OpenweathermapService } from "./services/openweathermap.service";
import { GroupbyPipe } from './pipes/groupby.pipe'

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherDayComponent,
    GroupbyPipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OpenweathermapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
