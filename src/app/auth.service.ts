import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  , BehaviorSubject} from 'rxjs';
import { UserRegester } from './user-regester';
import { UserLogin } from './user-login';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient ) { 
    if (localStorage.getItem('token')!=null) {
      this.getUserData()
    }
  }

  BASE_URL:string = 'https://route-egypt-api.herokuapp.com/'

regester(data:UserRegester):Observable<any>
{
  return this._HttpClient.post(`${this.BASE_URL}signup`,data)
}

login(data:UserLogin):Observable<any>
{
  return this._HttpClient.post(`${this.BASE_URL}signin`,data)
}

userData = new BehaviorSubject(null)

getUserData(){
  let token:string = JSON.stringify(localStorage.getItem('token'))
  let data:any = jwt_decode(token)
  this.userData.next(data)
  
}

logOut(){
  this.userData.next(null)
  localStorage.removeItem('token');
}



}