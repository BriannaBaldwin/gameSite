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
  backgroundImg!: string;
  end!: number;

  showMore = true; // find a way to get this to work


  constructor(private route: ActivatedRoute, private gamesService: GamesService, private el: ElementRef) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.game = this.gamesService.getGame(this.gameId - 1);
      this.videos = this.gamesService.getVideos(this.gameId - 1);

      this.backgroundImg = this.game.img;
      console.log(this.backgroundImg)

      let style: string = `
      .bg-img {
        background-image: url('${this.backgroundImg}');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: bottom;
      }
     `;

     this.createStyle(style);
    });
  }

  createStyle(style: string): void {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(style));
    this.el.nativeElement.appendChild(styleElement);
  }

  checkLength() {
    if(this.showMore === false) {
      this.end = 3;
    }
    else {
      this.end = 21;
    }
  // only show first three items unless showMore = true
  // if showMore = true then show all items and hide button
  }

  get sortData() {
    return this.videos.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
