import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SavedCitisComponent } from './saved-citis/saved-citis.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SavedCitisComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,NgxAuthFirebaseUIModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserModule { }
