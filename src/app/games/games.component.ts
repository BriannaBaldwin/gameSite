import { Component, OnInit } from '@angular/core';
import { IGame } from './shared/games.model';
import { GamesService } from './shared/games.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  public query: any = '';
  games!: IGame[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }

}
