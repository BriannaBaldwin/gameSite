import { CommonModule } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './game.pipe';

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
      // {
      //   path: ':id',
      //   component: ProductDetailComponent,
      //   resolve: { resolvedData: ProductResolver },
      // },
    ]),
  ],
  declarations: [GamesComponent, SearchPipe],
})
export class GamesModule {}
