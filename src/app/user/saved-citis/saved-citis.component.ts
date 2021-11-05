
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { City } from 'src/app/shared/interfaces/city';

@Component({
  selector: 'app-saved-citis',
  templateUrl: './saved-citis.component.html',
  styleUrls: ['./saved-citis.component.css']
})
export class SavedCitisComponent implements OnInit {

  cities :City[];
  city : any={} ;
  panelOpenState = false;
  updateForm=true;
  saveForm = false;
  userId = this.router.snapshot.paramMap.get('id');
  constructor(private firebaseService :FirebaseService,
    private router :ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.router.snapshot.paramMap.get('id');
    if(param){
      console.log(param);
      this.getuserCities(param)
      const id = param;
    }
  }

  getuserCities(id){
    this.firebaseService.getCityCollection(id).subscribe((data)=>{
      console.log(data);
      this.cities = data;
    })
  }

  saveCityUpdate(newCity: City) {
    console.log(newCity);
    this.firebaseService
        .updateCity(this.userId, this.city.id, newCity);
        this.city = {};
  }

  deleteCity(city){
    this.firebaseService.deleteCity(this.userId,city.id);
  }

  updateCity(city: any) {
    this.city.name = city.weather.name;
    this.city.description = city.weather.description;
    this.city.temperature = city.weather.temperature;
    this.city.id = city.id;
  }
}
