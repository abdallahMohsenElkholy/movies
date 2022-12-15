import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { ProtectGuard } from './protect.guard';
import { RegrsterComponent } from './regrster/regrster.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home' , canActivate:[ProtectGuard],component:HomeComponent , title:'home'},
  {path:'tvshows' , canActivate:[ProtectGuard],component:TvshowsComponent , title:'tvshows'},
  {path:'movies' , canActivate:[ProtectGuard],component:MoviesComponent , title:'movies'},
  {path:'tv/:x' , canActivate:[ProtectGuard],component:DetailsComponent},
  {path:'movie/:x' , canActivate:[ProtectGuard],component:DetailsComponent},
  {path:'person/:x' , canActivate:[ProtectGuard],component:DetailsComponent},
  {path:'login' ,component:LoginComponent , title:'login'},
  {path:'regester' ,component:RegrsterComponent , title:'regester'},
  {path:'people' , canActivate:[ProtectGuard],component:PeopleComponent , title:'people'},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
