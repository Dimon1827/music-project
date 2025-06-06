<script setup lang="ts">
import styles from "./Weekly.module.scss";
import weeklySongs from "./weeklySongData";
import type { ISong } from "@/types";
import WeeklySongItem from "./WeeklySongItem.vue";

const props = defineProps<{ currentPlaylist: ISong[] }>();
const { currentPlaylist } = props;

const currentTrackIndex = defineModel<number>('currentTrackIndex');

function handleUpdateIndex(index: number) {
  currentTrackIndex.value = index;
}

</script>
<template>
  <ul :class="styles.WeeklyList">
    <WeeklySongItem
      v-for="(weeklySong, index) in currentPlaylist"
      :key="weeklySong.name"
      :weeklySong="weeklySong"
      @click="handleUpdateIndex(index)"
    />
  </ul>
</template>


