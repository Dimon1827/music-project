<script setup lang="ts">
import { useMusicStore } from "@/stores/useMusicStore";
import styles from "./HeadlineFunctions.module.scss";
import Shuffle from "@/assets/icons/shuffle.svg";
import type { ISong } from "@/types";

const { setActivePlaylist } = useMusicStore();

const props = defineProps<{
  playlist: ISong[];
}>();

const { playlist } = props;

function setCustomPlaylist() {
  setActivePlaylist(playlist);
}
</script>
<template>
  <div :class="styles.topWrapper">
    <h1 :class="styles.mainTitle">My Music</h1>
    <div :class="styles.buttonsContainer">
      <div :class="styles.buttonWrapper" @click="setCustomPlaylist">
        <button type="button">
          <div :class="styles.playButton"></div>
        </button>
        <p :class="styles.textButton">Play</p>
      </div>
      <div :class="styles.buttonWrapper">
        <button type="button">
          <Shuffle :class="styles.shuffleImage" alt="Перемешать" width="18" height="18" />
        </button>
        <p :class="styles.textButton">Shuffle</p>
      </div>
    </div>
  </div>
</template>
