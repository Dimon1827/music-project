<script setup lang="ts">
import styles from "./Weekly.module.scss";
import weeklySongs from "./weeklySongData";
import type { ISong } from "@/types";
import WeeklySongItem from "./WeeklySongItem.vue";
import { useMusicStore } from "@/stores/useMusicStore";
import { storeToRefs } from "pinia";

const musicStore = useMusicStore();
const { activePlaylist } = storeToRefs(musicStore);
</script>
<template>
  <ul :class="styles.WeeklyList">
    <WeeklySongItem
      v-for="(weeklySong, index) in activePlaylist"
      :key="weeklySong.id"
      :weeklySong="weeklySong"
      :index="index"
    />
  </ul>
</template>
