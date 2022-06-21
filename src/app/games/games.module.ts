import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchPipe } from './games.pipe';

import { GamesComponent } from './games.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesComponent,
      },
    ]),
  ],
  declarations: [GamesComponent, SearchPipe],
})
export class GamesModule {}
