import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  games = [
    {
      id: 1,
      gameName: 'Overwatch',
      img: 'https://i.pinimg.com/originals/5f/3b/74/5f3b74e3a8a9341222b12781433b0602.jpg',
    },
    {
      id: 2,
      gameName: 'League of Legends',
      img: 'https://media.vandal.net/i/1200x630/12-2019/2019122011265139_1.jpg',
    },
    {
      id: 3,
      gameName: 'Call of Duty: Black Ops',
      img: 'https://wallpaperaccess.com/full/1288165.jpg',
    },
    {
      id: 4,
      gameName: 'Fortnite',
      img: 'https://i.pinimg.com/originals/c6/2e/a6/c62ea6568c7c5bfbcdc38a094b9f6c87.jpg'
    },
    {
      id: 5,
      gameName: 'Elden Ring',
      img: 'https://3.bp.blogspot.com/-qn916QiwfFo/XR40yv-QXoI/AAAAAAAAIGc/tXmSlUxtyzUqItbJFa0JqTQT3hblFTuEgCKgBGAs/w919/elden-ring-logo-uhdpaper.com-4K-2.jpg'
    }
  ];
}
