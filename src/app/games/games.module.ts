import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchPipe } from './games.pipe';

import { GamesComponent } from './games.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SafePipe } from './game-page/game-page.pipe';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesComponent,
      },
      {
        path: ':id',
        component: GamePageComponent
      }
    ]),
  ],
  declarations: [GamesComponent, SearchPipe, GamePageComponent, SafePipe],
})
export class GamesModule {}
