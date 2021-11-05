import { HttpClient, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WeatherData } from '../shared/interfaces/weathe-data';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private KEY = '159913025316399d3923bdb2da1d4c75';
  // private IMP = '&units=imperial'

  constructor(private http : HttpClient) { }

    searchWeatherData(cityName : string): Observable<Weather>{
      return this.http.get(`${this.URL}${cityName}&APPID=${this.KEY}`).pipe(
        map(data=> this.transformData(data)),
        tap(data=>{ console.log(data)}),
        catchError(this.handleError)
      );
    }
  transformData(data: any):Weather {
    return {
      name : data.name,
      country : data.sys.country,
      image : `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description : data.weather[0].description,
      temperature : data.main.temp,
      lat : data.coord.lat,
      lon : data.coord.lon
    }
  }
  handleError(handleError: HttpHeaderResponse) {
    console.error(handleError);
    return throwError(handleError['error'] || 'server error')
  }
}
