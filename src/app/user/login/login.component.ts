import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {


  providers :AuthProvider.Google;
  constructor(
    public afAuth :AngularFireAuth,
    private snackBar : MatSnackBar,
    private router :Router) { }

  ngOnInit(): void {
  }

  success(user){
      this.snackBar.open('Welcome '+user.displayName,'ok',{
        duration: 5000
      })
      this.router.navigate(['/weather']);
  }

}
