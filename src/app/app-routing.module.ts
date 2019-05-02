import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyComponent } from './daily/daily.component';
import { BallsComponent } from './balls/balls.component';

const routes: Routes = [
  {
    path:  'home',
    component:  HomeComponent
  },
  {
    path:  'daily',
    component:  DailyComponent
  },
  {
    path:  'combo',
    component:  BallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
