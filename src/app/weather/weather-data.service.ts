import { Injectable } from '@angular/core';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weather :Weather = {
    name : "",
    country : "",
    description : "",
    image : "",
    lat : null,
    lon :null,
    temperature : null
  }
  constructor() { }

  
}
