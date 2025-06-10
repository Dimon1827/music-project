<script setup lang="ts">
import Shuffle from "@/assets/icons/shuffle.svg";
import styles from "./MyMusic.module.scss";
import useRepeatSong from "@/hooks/useRepeatSong";
import MyMusicItem from "./MyMusicItem.vue";
import { useMusicStore } from "@/stores/useMusicStore";
import { storeToRefs } from "pinia";

const { isMusicRepeat, handleRepeatAudio } = useRepeatSong();

const musicStore = useMusicStore();
const { myMusic } = storeToRefs(musicStore);
</script>
<template>
  <div :class="styles.myMusicContainer">
    <div :class="styles.topWrapper">
      <h1 :class="styles.mainTitle">My Music</h1>
      <div :class="styles.buttonsContainer">
        <div :class="styles.buttonWrapper">
          <button>
            <div :class="styles.playButton"></div>
          </button>
          <p :class="styles.textButton">Play</p>
        </div>
        <div :class="styles.buttonWrapper">
          <button @Click="handleRepeatAudio">
            <Shuffle :class="styles.shuffleImage" alt="Перемешать" width="18" height="18" />
          </button>
          <p :class="styles.textButton">Shuffle</p>
        </div>
      </div>
    </div>
    <ul :class="styles.myMusicList">
      <MyMusicItem v-for="item of myMusic" :key="item.id" :weeklySong="item" />
    </ul>
  </div>
</template>
