import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


@NgModule({
  declarations: [WeatherItemComponent, WeatherViewComponent, WeatherSearchComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    NgxAuthFirebaseUIModule
  ],
  exports :  [WeatherItemComponent, WeatherViewComponent, WeatherSearchComponent]
})
export class WeatherModule { }
