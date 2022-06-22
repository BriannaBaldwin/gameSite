import { Injectable } from '@angular/core';
import { IGame, IVideo } from './games.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor() {}

  getGames() {
    return this.GAMES;
  }
  getGame(index: number) {
    return this.GAMES[index];
  }
  getVideos(index: number) {
    return this.GAMES[index].videos;
  }

  GAMES: IGame[] = [
    {
      id: 1,
      gameName: 'Overwatch',
      img: '../../assets/game-images/overwatch-img.jpg',
      videos: [
        {
          id: 1,
          videoUrl: 'https://www.youtube.com/embed/DJeJlwvtADA',
          datePosted: new Date('6/15/2022'),
        },
      ],
    },
    {
      id: 2,
      gameName: 'League of Legends',
      img: '../../assets/game-images/league-of-legends-img.jpg',
      videos: [
        {
          id: 1,
          videoUrl: 'https://www.youtube.com/embed/NfS90lUvr8I',
          datePosted: new Date('6/19/2022'),
        },
        {
          id: 2,
          videoUrl: 'https://www.youtube.com/embed/isKZ9I4lLww',
          datePosted: new Date('4/24/2022'),
        },
        {
          id: 3,
          videoUrl: 'https://www.youtube.com/embed/osg7WkJY69Q',
          datePosted: new Date('9/09/2021'),
        },
        {
          id: 4,
          videoUrl: 'https://www.youtube.com/embed/qGrKaLOYQSs',
          datePosted: new Date('3/23/2022'),
        },
        {
          id: 5,
          videoUrl: 'https://www.youtube.com/embed/_UeGJuVE3k8',
          datePosted: new Date('3/29/2022'),
        },
      ],
    },
    {
      id: 3,
      gameName: 'Call of Duty: Black Ops',
      img: '../../assets/game-images/call-of-duty-img.webp',
      videos: [
        {
          id: 1,
          videoUrl: 'https://www.youtube.com/embed/NfS90lUvr8I',
          datePosted: new Date('6/22/2022'),
        },
        {
          id: 2,
          videoUrl: 'https://www.youtube.com/embed/isKZ9I4lLww',
          datePosted: new Date('6/22/2022'),
        },
      ],
    },
    {
      id: 4,
      gameName: 'Fortnite',
      img: '../../assets/game-images/fortnite-img.jpg',
      videos: [
        {
          id: 1,
          videoUrl: 'https://www.youtube.com/embed/NfS90lUvr8I',
          datePosted: new Date('6/22/2022'),
        },
        {
          id: 2,
          videoUrl: 'https://www.youtube.com/embed/isKZ9I4lLww',
          datePosted: new Date('6/22/2022'),
        },
      ],
    },
    {
      id: 5,
      gameName: 'Elden Ring',
      img: '../../assets/game-images/elden-ring-img.jpg',
      videos: [
        {
          id: 1,
          videoUrl: 'https://www.youtube.com/embed/NfS90lUvr8I',
          datePosted: new Date('6/22/2022'),
        },
        {
          id: 2,
          videoUrl: 'https://www.youtube.com/embed/isKZ9I4lLww',
          datePosted: new Date('6/22/2022'),
        },
      ],
    },
  ];
}
