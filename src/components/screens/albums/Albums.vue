<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Albums.module.scss";
import albumsData from "./albums-data";
</script>
<template>
  <div :class="styles.albumsWrapper">
    <h1 :class="styles.mainTitle">Albums</h1>
    <div :class="styles.albumsContainer">
      <h2 :class="styles.subTitle">11 Albums</h2>
      <ul :class="styles.list">
        <li v-for="(album, index) in albumsData" :key="index" :class="styles.item">
          <RouterLink :to="album.to">
            <img
              :class="styles.image"
              :src="album.image"
              :alt="album.name"
              width="153"
              height="153"
            />
            <h3 :class="[styles.subTitle, styles.name]">{{ album.name }}</h3>
            <p :class="styles.artist">{{ album.artist }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
