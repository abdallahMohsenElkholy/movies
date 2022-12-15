import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../movies-api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[MoviesApiService]
})
export class DetailsComponent implements OnInit {

  altImg:string='../../assets/sv1xJUazXeYqALzczSZ3O6nkH75.jpg'
  imgSrc:string='https://image.tmdb.org/t/p/w500'
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesApiService:MoviesApiService) { }

  ngOnInit(): void {
    let id:number = this._ActivatedRoute.snapshot.params['x']
    let path:string = this._ActivatedRoute.snapshot.url[0]['path']
    
    this.callById(id , path)
  }
  msgErr:string=''
  movie:any
  callById(id:number , path:string){
    this._MoviesApiService.getApiById(id,path).subscribe({
      next:data=>{
        this.movie=data
      },
      error:err=>{this.msgErr='ay7aga'}

    })
    
  }

}
