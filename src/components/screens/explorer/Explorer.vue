<script setup lang="ts">
import styles from './Explorer.module.scss';
import Album from './album/Album.vue';
import Musics from './musics/Musics.vue';
import newMusicData from './data/newMusicData';
import playlistData from './data/playlistData';

</script>
<template>
  <section :class="styles.explorer">
      <h1 :class="styles.mainTitle">Explore</h1>
      <div :class="styles.sliderWrapper">
        <Album />
        <Musics :text="'New Music'" :data="newMusicData" />
        <Musics :text="'Playlist You Need'" :data="playlistData" />
      </div>
    </section>
</template>





