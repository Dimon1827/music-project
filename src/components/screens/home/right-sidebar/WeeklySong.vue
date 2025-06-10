<script setup lang="ts">
import styles from "./Weekly.module.scss";
import weeklySongs from "./weeklySongData";
import type { ISong } from "@/types";
import WeeklySongItem from "./WeeklySongItem.vue";

const props = defineProps<{ currentPlaylist: ISong[] }>();
const { currentPlaylist } = props;
</script>
<template>
  <ul :class="styles.WeeklyList">
    <WeeklySongItem
      v-for="weeklySong in currentPlaylist"
      :key="weeklySong.id"
      :weeklySong="weeklySong"
    />
  </ul>
</template>
