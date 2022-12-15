import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }
  errMsg:string=''
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required , Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
  })

  getLogin(form:FormGroup){
    this._AuthService.login(form.value).subscribe({
      next:data=>{
        if(data.message==='success'){
          this._Router.navigate(['/home'])
          localStorage.setItem('token',data.token)
          this._AuthService.getUserData()
        }else{
          this.errMsg=data.message
        }
      }
    })
    
  }

}
