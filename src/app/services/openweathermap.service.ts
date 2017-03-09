import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenweathermapService {

    // TODO: move to config settings
    baseUrl: string = "http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=";
    apiKey: string = "5b335e4da7f516ea5bbf6613c2e96ad8";
    constructor(private http: Http) { }

    get(city: string): Promise<any> {
      var forcastUrl = `${this.fiveDayUrl}${city}`;

      return this.http.get(forcastUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    private get fiveDayUrl(): string {
        return `${this.baseUrl}${this.apiKey}&q=`;
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}
