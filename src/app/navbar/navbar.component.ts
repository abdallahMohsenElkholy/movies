import { Component  ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchUpdateService } from './../search-update.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  checkLogin:boolean = false;
  constructor(private _AuthService:AuthService ,private _SearchUpdateService:SearchUpdateService) { }


  logOut(){
    this._AuthService.logOut()
  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if (this._AuthService.userData.getValue()!=null) {
          this.checkLogin = true
        }else{
          this.checkLogin=false
        }
      }
    })
  }
  globalSearch(word:any){
    this._SearchUpdateService.search(word.target.value)
    
  }

}
