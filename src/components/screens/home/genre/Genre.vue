<script setup lang="ts">
import styles from "./Genre.module.scss";
import genres from "./genre-data";
import TopWrapper from "../top-wrapper/TopWrapper.vue";
import GenreItem from "./GenreItem.vue";
</script>
<template>
  <section :class="styles.genre">
    <TopWrapper :text="'Top Genre'" />
    <ul :class="styles.genreList">
      <GenreItem v-for="genre in genres" :key="genre.id" :genre="genre" />
    </ul>
  </section>
</template>
