<script setup lang="ts">
import artists from "./artists";
import ArtistsItem from "./artists-item/ArtistsItem.vue";
import styles from "./artists-item/Artists.module.scss";
import TopWrapper from "../top-wrapper/TopWrapper.vue";
</script>

<template>
  <section :class="styles.artists">
    <TopWrapper :text="'Top Artists'" />
    <ul :class="styles.artistsList">
      <ArtistsItem v-for="artist in artists" :key="artist.id" :artist="artist" />
    </ul>
  </section>
</template>

<style lang=""></style>
