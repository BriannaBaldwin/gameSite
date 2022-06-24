import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatorsComponent } from './creators/creators.component';
import { GamesModule } from './games/games.module';
import { AdminComponent } from './admin/admin.component';

import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatorsComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
