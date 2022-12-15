import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from './../movies-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css'],
  providers:[MoviesApiService]
})
export class TvshowsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    margin:5,
    mouseDrag: true,
    autoplaySpeed:3000,
    touchDrag: true,
    pullDrag: false,
    slideTransition:'linear',
    dots: false,
    navSpeed: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      760: {
        items: 5
      },
      1000: {
        items: 8
      }
    },
    nav: true
  }

    constructor(private _MoviesApiService:MoviesApiService) { }
    imgSrc:string='https://image.tmdb.org/t/p/w500'
    moviesArr:any[]=[]
    ngOnInit(): void {
      this._MoviesApiService.getApi('tv',1).subscribe({
        next:data=>{
          let arr =[...data.results]        
          this.moviesArr=arr.filter((ele)=>ele['poster_path']!=null)
        }
        }  
      )

  }
}
