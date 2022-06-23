import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGame, IVideo } from '../shared/games.model';
import { GamesService } from '../shared/games.service';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  private routeSub!: Subscription;
  gameId!: number;
  game!: IGame;
  videos!: IVideo[];

  end = 3;
  showMore = true;

  constructor(private route: ActivatedRoute, private gamesService: GamesService, private el: ElementRef) { }

  ngOnInit(): void {
    // get the game and video Ids to display all the videos for the correct game
    this.routeSub = this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.game = this.gamesService.getGame(this.gameId - 1);
      this.videos = this.gamesService.getVideos(this.gameId - 1);
    });
  }

  // method checks to see if showMore is true or false and displays amount of videos based on variable
  checkShowMore() {
    if(this.showMore == false) {
      this.end = 3;
      this.showMore = true;
    }
    else {
      this.end = 21;
      this.showMore = false;
    }
  }

  // sorts videos by date
  get sortVideos() {
    return this.videos.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe(); // unsubscribe to route if switching to a different game
  }

}
