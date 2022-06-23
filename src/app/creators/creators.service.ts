import { Injectable } from '@angular/core';
import { ICreators  } from './creators.model';

@Injectable({
  providedIn: 'root',
})
export class CreatorsService {
  constructor() {}

  getCreators() {
    return this.CREATORS;
  }

  CREATORS: ICreators[] = [
    {
      id: 1,
      name: 'PKILB',
      img: 'https://t4.ftcdn.net/jpg/02/44/67/47/360_F_244674784_EDDlhrK0uqtP6Qlj1eHMi3b4vwTYmDXq.jpg',
      about: 'Aenean fringilla ut quam a rutrum. Cras vitae suscipit neque, et convallis tortor. Ut ultricies gravida ante, sit amet interdum velit fringilla sed.',
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaguers?igshid=YmMyMTA2M2Y=',
        instagramTag: 'dalittleleaguers',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: 'PKILB',
        twitch: 'https://www.twitch.tv/pkilb',
        twitchTag: 'PKILB'
      },
    },
    {
      id: 2,
      name: 'Jjello Man',
      img: 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
      about:
        'Aenean fringilla ut quam a rutrum. Cras vitae suscipit neque, et convallis tortor. Ut ultricies gravida ante, sit amet interdum velit fringilla sed',
      socials: {
        instagram: '',
        instagramTag: '',
        youtube: '',
        youtubeTag: '',
        twitch: '',
        twitchTag: ''
      },
    },
    {
      id: 3,
      name: 'Nemo',
      img: 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
      about: 'Aenean fringilla ut quam a rutrum. Cras vitae suscipit neque, et convallis tortor. Ut ultricies gravida ante, sit amet interdum velit fringilla sed ',
      socials: {
        instagram: '',
        instagramTag: '',
        youtube: '',
        youtubeTag: '',
        twitch: '',
        twitchTag: ''
      },
    },
    {
      id: 4,
      name: 'Borger',
      img: 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
      about:
        'Aenean fringilla ut quam a rutrum. Cras vitae suscipit neque, et convallis tortor. Ut ultricies gravida ante, sit amet interdum velit fringilla sed',
      socials: {
        instagram: '',
        instagramTag: '',
        youtube: '',
        youtubeTag: '',
        twitch: '',
        twitchTag: ''
      },
    },
    {
      id: 5,
      name: 'BriRex',
      img: 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
      about: "Aenean fringilla ut quam a rutrum. Cras vitae suscipit neque, et convallis tortor. Ut ultricies gravida ante, sit amet interdum velit fringilla sed",
      socials: {
        instagram: 'https://www.instagram.com/the_real_brirex?igshid=YmMyMTA2M2Y=',
        instagramTag: 'the_real_brirex',
        youtube: '',
        youtubeTag: '',
        twitch: '',
        twitchTag: ''
      },
    },
    {
      id: 6,
      name: '7doenigmatic',
      img: 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
      about:
        "Aenean fringilla ut quam a rutrum. Cras vitae suscipit neque, et convallis tortor. Ut ultricies gravida ante, sit amet interdum velit fringilla sed",
      socials: {
        instagram: 'https://www.instagram.com/7doenigmatic/?igshield=YmMyMTA2M2Y=',
        instagramTag: '7doenigmatic',
        youtube: '',
        youtubeTag: '',
        twitch: 'https://www.twitch.tv/7doenigmatic',
        twitchTag: '7DOenigmatic'
      },
    },
  ];
}
