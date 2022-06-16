import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatorsComponent } from './creators/creators.component';
import { GamesComponent } from './games/games.component';
import { Error404Component } from './404.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'creators', component: CreatorsComponent},
    { path: 'games', component: GamesComponent},
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}
  ])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
