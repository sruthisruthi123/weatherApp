import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCjA8WITZflxHl_rqOw0WIU-_LrNqEvkEU'
    })
  ],
  exports : [
    FormsModule,
    AgmCoreModule
  ]
})
export class SharedModule { }
