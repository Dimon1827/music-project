import type { ISong } from "@/types";

const weeklySong: ISong[] = [
  {
    id: 1,
    name: "Anyone",
    image: "/images/songs/anyoneBieber.jpg",
    artist: "Justin Bieber",
    songSrc: "/songs/Justin_Bieber-Anyone.mp3",
    time: "03:10",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Dynamite",
    image: "/images/songs/dynamiteBTS.jpg",
    songSrc: "/songs/BTS-Dynamite.mp3",
    artist: "BTS",
    time: "03:19",
    isFavorite: true,
  },
  {
    id: 3,
    name: "What Other Peop...",
    image: "/images/songs/songLovato.jpg",
    artist: "Demi Lovato",
    songSrc: "/songs/Demi_Lovato-What_Other_People_Say.mp3",
    time: "03:14",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Selfish Love",
    image: "/images/songs/loveGomez.jpg",
    songSrc: "/songs/Selena_Gomez-Selfish_Love.mp3",
    artist: "Selena Gomez",
    time: "02:48",
    isFavorite: false,
  },
];

export default weeklySong;
