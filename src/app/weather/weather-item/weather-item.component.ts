import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseService } from 'src/app/shared/firebase.service';
// import { City } from 'src/app/shared/interfaces/city';
import { User } from 'src/app/shared/interfaces/user';
import { Weather } from 'src/app/shared/interfaces/weather';
import { UserAuthServiceService } from 'src/app/user/auth-service.service';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['weather.item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  
  get weather (){
    return this.weatherDataService.weather;
  }
  user$:User;
  constructor(private weatherDataService : WeatherDataService,
    private userAuthService:UserAuthServiceService,
    private firebaseService:FirebaseService,
    private snackBar:MatSnackBar) {
      this.userAuthService.user.subscribe(user => this.user$ = user)
     }
  
  ngOnInit(): void {
  }

  addCity(weather:Weather){
      const city = {
        name :this.weather.name,
        description :weather.description,
        country :weather.country,
        temperature :weather.temperature,
        lat :weather.lat,
        lon:weather.lon
      }
      this.firebaseService.addCity(this.user$.uid,city)
            .then((res)=>{
              console.log(res);
              this.snackBar.open("success,city saved","ok",{
                duration : 5000
              })
            })
            .catch((err)=>{
              this.snackBar.open(err);
            })
  }
}
