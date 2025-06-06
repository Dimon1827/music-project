<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Artists.module.scss";
import type { IArtistItem } from "@/types";
const props = defineProps<{ artist: IArtistItem }>();
const { artist } = props;
</script>
<template>
  <li :class="styles.artistItem">
    <img
      :class="styles.artistImage"
      :src="artist.image"
      :alt="artist.name"
      width="90"
      height="90"
    />
    <RouterLink :class="styles.artistLink" :to="artist.to"> {{ artist.name }} </RouterLink>
    <p :class="styles.text">{{ artist.plays }} Plays</p>
  </li>
</template>

<style scoped></style>
