<script setup lang="ts">
import styles from "./MyMusic.module.scss";
import useRepeatSong from "@/hooks/useRepeatSong";
import MyMusicItem from "./MyMusicItem.vue";
import { useMusicStore } from "@/stores/useMusicStore";
import { storeToRefs } from "pinia";
import HeadlineFunctions from "@/components/UI/headline-functions/HeadlineFunctions.vue";

const { isMusicRepeat, handleRepeatAudio } = useRepeatSong();

const musicStore = useMusicStore();
const { myMusic } = storeToRefs(musicStore);
</script>
<template>
  <div :class="styles.myMusicContainer">
    <HeadlineFunctions :playlist="myMusic" />
    <ul :class="styles.myMusicList">
      <MyMusicItem v-for="item of myMusic" :key="item.id" :weeklySong="item" />
    </ul>
  </div>
</template>
