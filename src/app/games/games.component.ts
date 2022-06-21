import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  public query: any = '';

  constructor() {}

  ngOnInit(): void {}

  games = [
    {
      id: 1,
      gameName: 'Overwatch',
      img: '../../assets/game-images/overwatch-img.jpg',
    },
    {
      id: 2,
      gameName: 'League of Legends',
      img: '../../assets/game-images/league-of-legends-img.jpg',
    },
    {
      id: 3,
      gameName: 'Call of Duty: Black Ops',
      img: '../../assets/game-images/call-of-duty-img.webp',
    },
    {
      id: 4,
      gameName: 'Fortnite',
      img: '../../assets/game-images/fortnite-img.jpg'
    },
    {
      id: 5,
      gameName: 'Elden Ring',
      img: '../../assets/game-images/elden-ring-img.jpg'
    }
  ];
}
