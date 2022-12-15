import { Component, OnInit } from '@angular/core';
import { MovieData } from '../movie-data';
import { MoviesApiService } from '../movies-api.service';
import { SearchUpdateService } from '../search-update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[MoviesApiService]
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesApiService:MoviesApiService , private _SearchUpdateService:SearchUpdateService) { }
  imgSrc:string='https://image.tmdb.org/t/p/w500'
  moviesArr1:MovieData[]=[]
  moviesArr2:MovieData[]=[]
  moviesArr3:MovieData[]=[]
  searchWard:string=''
  ngOnInit(): void {
    this._SearchUpdateService.searchBolean.subscribe({
      next:ward=>{this.searchWard=ward;console.log(this.searchWard);}
    })
    this._MoviesApiService.getApi('movie',1).subscribe({
      next:data=>{
        let arr =[...data.results]        
          this.moviesArr1=arr.filter((ele)=>ele['poster_path']!=null).slice(0,10)
          
        }
      })
      this._MoviesApiService.getApi('tv',1).subscribe({
        next:data=>{
          let arr =[...data.results]        
          this.moviesArr2=arr.filter((ele)=>ele['poster_path']!=null).slice(0,10)
        }
      })
      this._MoviesApiService.getApi('person',1).subscribe({
        next:data=>{
          let arr =[...data.results]        
          this.moviesArr3=arr.filter((ele)=>ele['profile_path']!=null).slice(0,10)
      }
    })

    
  }

}
