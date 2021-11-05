import { HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { City } from './interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private KEY = '159913025316399d3923bdb2da1d4c75';
  // private IMP = '&units=imperial'
  userCollection : AngularFirestoreCollection = this.afs.collection('users');
  cityCollection : AngularFirestoreCollection ;

  constructor(private afs : AngularFirestore) { }

  addCity(userId :string, weather:any){
    const city = {
      weather,
      time :new Date()
    };
    return this.userCollection
                .doc(userId)
                .collection('cities').add(city)
  }

  getCityCollection(id:string): Observable<any[]>{
    this.cityCollection = this.afs.collection(`users/${id}/cities`, (ref)=> ref.orderBy('time','desc'));
    console.log(this.cityCollection)
    return this.cityCollection.snapshotChanges().pipe(
      map(action => action.map(a=>{
        console.log(a)
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return{...data};
      }))
    )
  }

  getCity(userId: string, cityId: City) {
    return this.afs.doc(`users/${userId}/cities/${cityId}`);
  }

  updateCity(userId: string, city: City, weather) {
    const newCity = {
      weather,
      time: new Date()
    };
    return this.getCity(userId, city).set(newCity);
  }

  deleteCity(userId:string,city:City){
    return this.getCity(userId,city).delete();
  }
  
  handleError(handleError: HttpHeaderResponse) {
    console.error(handleError);
    return throwError(handleError['error'] || 'server error')
  }
}