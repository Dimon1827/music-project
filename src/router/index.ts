import Albums from '@/components/screens/albums/Albums.vue';
import Artists from '@/components/screens/artists/Artists.vue';
import Explorer from '@/components/screens/explorer/Explorer.vue'
import Home from '@/components/screens/home/Home.vue'
import MyMusic from '@/components/screens/my-music/MyMusic.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/explorer",
      name: "explorer",
      component: Explorer,
    },
    {
      path: "/my-music",
      name: "my-music",
      component: MyMusic,
    },
    {
      path: "/albums",
      name: "albums",
      component: Albums,
    },
    {
      path: "/artists",
      name: "artists",
      component: Artists,
    },
  ],
});

export default router
