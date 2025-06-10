export interface ISong {
  id: number;
  name: string;
  image: string;
  artist: string;
  songSrc: string;
  isFavorite?: boolean;
  time?: string;
}
