import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-separate-component',
  templateUrl: './separate-component.component.html'
})
export class SeparateComponent {
  public forecast: WeatherForecast | undefined;
  public id: number = 0;
  public http: HttpClient;
  public baseUrl: string | undefined;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast>(baseUrl + 'separatecomponent' + '?id='+this.id).subscribe(result => {
      this.forecast = result;
    }, error => console.error(error));
    this.http = http;
    this.baseUrl = baseUrl;
  }
  show(): void {
    this.http.get<WeatherForecast>(this.baseUrl + 'separatecomponent' + '?id=' + this.id).subscribe(result => {
      this.forecast = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
