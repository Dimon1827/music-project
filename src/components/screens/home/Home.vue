<script setup>
import Collections from "./collections/Collections.vue";
import PromoBanner from "./promo-banner/PromoBanner.vue";
import TopArtists from "./top-artists/TopArtists.vue";
import Genre from "./genre/Genre.vue";
import styles from './Home.module.scss'
</script>

<template>
  <PromoBanner />
  <TopArtists />
  <div :class = "styles.homeContainer" >
    <Collections />
    <Genre />
  </div>
</template>

<style scoped></style>
