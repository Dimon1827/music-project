<script setup lang="ts">
import TopWrapper from "../top-wrapper/TopWrapper.vue";
import WeeklySong from "./WeeklySong.vue";
import styles from "./Weekly.module.scss";
import Player from "./player/Player.vue";
import weeklySongData from "./weeklySongData";
import { ref } from "vue";
import type { ISong } from "@/types";

const currentPlaylist = ref<ISong[]>(weeklySongData);
const currentTrackIndex = ref(0);
</script>
<template>
  <section :class="styles.RightSidebar">
    <div :class="styles.WeeklyWrapper">
      <TopWrapper :text="'Top 100 Weekly'" />
      <WeeklySong
        :currentPlaylist="currentPlaylist"
        v-model:currentTrackIndex="currentTrackIndex"
      />
    </div>
    <Player :playlist="currentPlaylist" v-model:currentTrackIndex="currentTrackIndex" />
  </section>
</template>
