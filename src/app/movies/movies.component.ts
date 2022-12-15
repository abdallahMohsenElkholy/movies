import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { SearchUpdateService } from '../search-update.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesApiService]
})
export class MoviesComponent implements OnInit {
  bool:boolean=false
  searchArr:any[]=[]
  searchText:string=''
  pages:number[]=[1,2,3,4,5]
  pageNum:number=0
  constructor(private _MoviesApiService:MoviesApiService , private _SearchUpdateService:SearchUpdateService) { }
  imgSrc:string='https://image.tmdb.org/t/p/w500'
  moviesArr:any[]=[]
  searchWard:string=''
  ngOnInit(): void {
    this.callApi(2)
    this.callApiForsearch()
    this._SearchUpdateService.searchBolean.subscribe({
      next:ward=>{this.searchWard=ward;console.log(this.searchWard);}
    })
  }
  
  callApi(page:number){
    this.pageNum=page
    this._MoviesApiService.getApi('movie',page).subscribe({
      next:data=>{
        let arr =[...data.results]        
        this.moviesArr=arr.filter((ele)=>ele['poster_path']!=null)
      }
      
    })
  }
  callApiForsearch(){
    this.pages.forEach(ele=>{
      this._MoviesApiService.getApi('movie',ele).subscribe({
      next:data=>{
        let arr =[...data.results]        
        let arr2=arr.filter((ele)=>ele['poster_path']!=null)
        this.searchArr.push(...arr2)
      }
    })
    
      
    })
  }
  
  next(){
    if(this.pageNum==1000){
      this.pageNum=1000
    }else this.pageNum++
    this.callApi(this.pageNum)
  }

  pre(){
    if(this.pageNum==1){
      this.pageNum=1
    }else this.pageNum--
    this.callApi(this.pageNum)
  }

  search(item:any){
    this.moviesArr =this.searchArr.filter((movie)=>movie.title.toUpperCase().includes(item.target.value.toUpperCase()))
    
  }
  

}

