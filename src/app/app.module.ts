import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatorsComponent } from './creators/creators.component';
import { GamesModule } from './games/games.module';
import { AdminComponent } from './admin/admin.component';

// Import module from SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatorsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    AuthModule.forRoot({
      domain: 'dev-2-ebrraw.us.auth0.com',
      clientId: 'wn4Id2BX8HzFeizaFhTBykl0Nepwxufv'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
