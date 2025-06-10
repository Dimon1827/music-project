<script setup lang="ts">
import styles from "./Player.module.scss";
import Shuffle from "@/assets/icons/shuffle.svg";
import Previous from "@/assets/icons/previous.svg";
import Next from "@/assets/icons/next.svg";
import Repeat from "@/assets/icons/repeat.svg";
import useRepeatSong from "@/hooks/useRepeatSong";
import usePlaySong from "@/hooks/usePlaySong";
import type { ISong } from "@/types";
import { ref } from "vue";
import { useMusicStore } from "@/stores/useMusicStore";
import { storeToRefs } from "pinia";

interface IPlayerProps {
  playlist: ISong[];
}

const props = defineProps<IPlayerProps>();
const { playlist } = props;

const musicStore = useMusicStore();
const { currentTrackIndex } = storeToRefs(musicStore);

const audioProgress = ref(0);
const musicTotalLength = ref("3:10");
const musicCurrentTime = ref("0:00");
const { isMusicRepeat, handleRepeatAudio } = useRepeatSong();
const {
  currentMusicDetails,
  isAudioPlaying,
  currentAudio,
  handleAudioPlay,
  handlePreviousSong,
  handleNextSong,
} = usePlaySong(playlist, currentTrackIndex);

function handleMusicProgressBar(e: Event) {
  if (!currentAudio.value) return;

  const target = e.target as HTMLInputElement;
  audioProgress.value = Number(target.value);
  currentAudio.value.currentTime = (Number(target.value) * currentAudio.value.duration) / 100;
}

function handleAudioUpdate() {
  if (!currentAudio.value) return;

  if (!isNaN(currentAudio.value.duration)) {
    let minutes = Math.floor(currentAudio.value.duration / 60);
    let seconds = Math.floor(currentAudio.value.duration % 60);
    musicTotalLength.value = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  } else {
    musicTotalLength.value = "0:00";
  }

  let min = Math.floor(currentAudio.value.currentTime / 60);
  let sec = Math.floor(currentAudio.value.currentTime % 60);
  let musicCurrentT = `${min}:${sec < 10 ? `0${sec}` : sec}`;
  musicCurrentTime.value = musicCurrentT;
  const progress = (currentAudio.value.currentTime / currentAudio.value.duration) * 100;

  audioProgress.value = isNaN(progress) ? 0 : progress;
}
</script>
<template>
  <div :class="styles.player">
    <h2 :class="styles.title">Now playing</h2>
    <audio
      :loop="isMusicRepeat"
      src="/songs/Justin_Bieber-Anyone.mp3"
      ref="currentAudio"
      @ended="handleNextSong"
      @timeupdate="handleAudioUpdate"
    ></audio>
    <img :class="styles.image" :src="currentMusicDetails.image" alt="" width="200" height="120" />
    <h3 :class="styles.subtitle">{{ currentMusicDetails.name }}</h3>
    <h4 :class="styles.artist">{{ currentMusicDetails.artist }}</h4>
    <input
      type="range"
      :class="styles.slider"
      :value="audioProgress"
      @input="handleMusicProgressBar"
    />
    <div :class="styles.timeWrapper">
      <div :class="styles.currentTime">{{ musicCurrentTime }}</div>
      <div :class="styles.allTime">{{ musicTotalLength }}</div>
    </div>
    <div :class="styles.actions">
      <button :class="styles.shuffle">
        <Shuffle :class="styles.shuffleImage" alt="Перемешать" />
      </button>
      <button :class="styles.previous" @click="handlePreviousSong">
        <Previous :class="styles.previousImage" alt="Назад" />
      </button>
      <button :class="styles.play" @click="handleAudioPlay">
        <div :class="[isAudioPlaying ? styles.stopButton : styles.playButton]"></div>
      </button>
      <button :class="styles.next" @click="handleNextSong">
        <Next :class="styles.nextImage" alt="Вперед" />
      </button>
      <button
        :class="[styles.repeat, { [styles.active]: isMusicRepeat }]"
        @click="handleRepeatAudio"
      >
        <Repeat :class="styles.repeatImage" alt="Повторить" />
      </button>
    </div>
    <p :class="styles.text">Lyrics</p>
  </div>
</template>
