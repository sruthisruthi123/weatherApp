import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {
  user :Observable <User | null>;
  constructor(private http : HttpClient,
              public afAuth :AngularFireAuth,
              private snackBar : MatSnackBar,
              private router : Router) { 
                this.user = this.afAuth.authState;
              }

  handleError(handleError: HttpHeaderResponse) {
    console.error(handleError);
    return throwError(handleError['error'] || 'server error')
  }

  logout(){
    this.afAuth.signOut().then(()=>{
      this.snackBar.open('You have signed out','ok',{
        duration: 5000
      })
      this.router.navigate(['/weather']);
    })
  }
}
