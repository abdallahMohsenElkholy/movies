import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class MoviesApiService {

  constructor(private _HttpClient:HttpClient) { }


  getApi (type:string , num:Number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=446dfaa7db421ce53d651cdac393760e&page=${num}`)
  }
  
  getApiById (id:Number,path:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${path}/${id}?api_key=446dfaa7db421ce53d651cdac393760e&language=en-US`)
  }

}
