import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/shared/interfaces/weathe-data';
import { Weather } from 'src/app/shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  query = '';
  errorMessage: any = "";

  constructor(private weatherService : WeatherService,
    private weatherDataService : WeatherDataService) { 
  }

  ngOnInit(): void {
  }

  set weather(data : Weather){
    this.weatherDataService.weather = data
  }
  search(key){
    this.errorMessage = "";
    console.log(this.query)
    this.weatherService.searchWeatherData(this.query).subscribe(data=>{
      console.log(data);
      this.weather = data;
    },error=>{
      console.log(error);
      this.errorMessage = error.message;
    })
  }
}
