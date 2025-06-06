import type { IListItem } from "@/types";

export const menu: IListItem[] = [
  {
    name: "Discover",
    to: "/",
  },
  {
    name: "Explorer",
    to: "/explorer",
  },
  {
    name: "Search",
    to: "/search",
  },
];

export const library: IListItem[] = [
  {
    name: "My Music",
    to: "/my-music",
  },
  {
    name: "Albums",
    to: "/albums",
  },
  {
    name: "Artists",
    to: "/artists",
  },
];

export const playlist: IListItem[] = [
  {
    name: "Cover",
    to: "/cover",
  },
  {
    name: "Favorites",
    to: "/favorites",
  },
  {
    name: "Shared",
    to: "/shared",
  },
  {
    name: "Downloads",
    to: "/downloads",
  },
];

export const others: IListItem[] = [
  {
    name: "Settings",
    to: "/settings",
  },
  {
    name: "Logout",
    to: "/logout",
  },
];
