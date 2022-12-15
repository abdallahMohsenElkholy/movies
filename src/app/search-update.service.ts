import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchUpdateService {

  constructor() { }

  searchBolean=new BehaviorSubject('')

  search(val:string){
    this.searchBolean.next(val)
    
  }



}
