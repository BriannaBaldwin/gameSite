export interface IGame {
  id: number,
  gameName: string,
  img: string,
  videos: IVideo[]
}

export interface IVideo {
  id: number
  videoUrl: string
  datePosted: Date
}
