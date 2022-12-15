import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-regrster',
  templateUrl: './regrster.component.html',
  styleUrls: ['./regrster.component.css']
})
export class RegrsterComponent implements OnInit {

  errMsg !:string
  regesterForm:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.required , Validators.minLength(4),Validators.maxLength(12) , Validators.pattern('^[a-zA-Z]{0,}$')]),
    last_name:new FormControl(null,[Validators.required , Validators.minLength(4),Validators.maxLength(12) , Validators.pattern('^[a-zA-Z]{0,}$')]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required , Validators.pattern('^[a-zA-Z0-9]{4,16}$')]),
    age:new FormControl(null,[Validators.required , Validators.min(18),Validators.max(60)]),
  })

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  getRegesteration(form:FormGroup){
    this._AuthService.regester(form.value).subscribe({
      next:data=>{
        if(data.message=='success'){
          this._Router.navigate(['/login'])
        }else{
          this.errMsg=data.errors.email.message
        }
      }
    })
    
  }

  ngOnInit(): void {
  }

}
