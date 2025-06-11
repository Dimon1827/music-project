import type { IListItem } from "@/types";

interface IArtist extends IListItem {
  image: string;
}

const artistsData: IArtist[] = [
  { to: "", image: "/images/albums/wendy.webp", name: "BTS" },
  { to: "", image: "/images/albums/wendy.webp", name: "Bruno Mars, Silk Sonic" },
  { to: "", image: "/images/albums/wendy.webp", name: "Ed Sheeran" },
  { to: "", image: "/images/albums/wendy.webp", name: "ROSE" },
  { to: "", image: "/images/albums/wendy.webp", name: "Justin Bieber" },
  { to: "", image: "/images/albums/wendy.webp", name: "TWICE" },
  { to: "", image: "/images/albums/wendy.webp", name: "WENDY" },
  { to: "", image: "/images/albums/wendy.webp", name: "Eminem" },
  { to: "", image: "/images/albums/wendy.webp", name: "Linkin Park" },
];

export default artistsData;
