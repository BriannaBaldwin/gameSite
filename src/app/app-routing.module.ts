import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatorsComponent } from './creators/creators.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'creators', component: CreatorsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
  ])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
