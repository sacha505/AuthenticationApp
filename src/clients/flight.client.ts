import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightClient {
  constructor(private http: HttpClient) { }
  //for now, before DB integration we can just return the weather
  getWeatherData(): Observable<any> {
    return this.http.get(environment.apiUrl + '/WeatherForecast');
  }
}
