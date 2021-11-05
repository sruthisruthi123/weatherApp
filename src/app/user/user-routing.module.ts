import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedCitisComponent } from './saved-citis/saved-citis.component';


const routes: Routes = [
  { 
    path : 'login',
    pathMatch : 'full',
    component : LoginComponent
  },
  { 
    path : 'cities/:id',
    pathMatch : 'full',
    component : SavedCitisComponent
  },
  { 
    path : 'profile',
    pathMatch : 'full',
    component : ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
