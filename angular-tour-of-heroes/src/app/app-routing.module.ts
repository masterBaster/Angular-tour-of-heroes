import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: 'home', children:[
      { path: 'heroes', component: HeroesComponent }]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }


