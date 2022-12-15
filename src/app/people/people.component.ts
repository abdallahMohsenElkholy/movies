import { Component, OnInit  ,Input} from '@angular/core';
import { SearchUpdateService } from '../search-update.service';
import { MoviesApiService } from './../movies-api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers:[MoviesApiService]
})
export class PeopleComponent implements OnInit {
  
  searchWard:string=''
  constructor(private _MoviesApiService:MoviesApiService ,private _SearchUpdateService:SearchUpdateService) { }
  imgSrc:string='https://image.tmdb.org/t/p/w500'
  moviesArr:any[]=[]
  ngOnInit(): void {
    this._MoviesApiService.getApi('person',2).subscribe({
      next:data=>{
        let arr =[...data.results]        
        this.moviesArr=arr.filter((ele)=>ele['profile_path']!=null)
      } 
    })

    this._SearchUpdateService.searchBolean.subscribe({
      next:ward=>{this.searchWard=ward;console.log(this.searchWard);}
    })
    
  }

}
