import type { ISong } from "@/types";
import { ref, watch, type Ref } from "vue";

const usePlaySong = (playlist: Ref<ISong[]>, initialIndex: Ref<number>) => {
  const currentMusicDetails = ref(playlist.value[initialIndex.value]);

  const isAudioPlaying = ref(false);
  const musicIndex = ref(initialIndex.value);
  const isFirstRender = ref(true);
  const currentAudio = ref<HTMLAudioElement | null>(null);

  watch(playlist, (newPlaylist) => {
    if (newPlaylist.length === 0) return;

    updateCurrentMusicDetails(musicIndex.value);
  });

  watch(initialIndex, (newIndex) => {
    if (isFirstRender.value) {
      isFirstRender.value = false;
      return;
    }
    updateCurrentMusicDetails(newIndex);
  });

  function handleAudioPlay() {
    if (!currentAudio.value) return;

    if (currentAudio.value.paused) {
      currentAudio.value.play();
      isAudioPlaying.value = true;
    } else {
      currentAudio.value.pause();
      isAudioPlaying.value = false;
    }
  }

  function handlePreviousSong() {
    if (musicIndex.value === 0) {
      let setNumber = playlist.value.length - 1;
      musicIndex.value = setNumber;
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex.value - 1;
      musicIndex.value = setNumber;
      updateCurrentMusicDetails(setNumber);
    }
  }

  function handleNextSong() {
    if (musicIndex.value >= playlist.value.length - 1) {
      let setNumber = 0;
      musicIndex.value = setNumber;
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex.value + 1;
      musicIndex.value = setNumber;
      updateCurrentMusicDetails(setNumber);
    }
  }

  function updateCurrentMusicDetails(number: number) {
    if (!currentAudio.value) return;

    let musicObject = playlist.value[number];
    const newMusic = {
      id: musicObject.id,
      name: musicObject.name,
      artist: musicObject.artist,
      songSrc: musicObject.songSrc,
      image: musicObject.image,
      isFavorite: false,
    };

    currentMusicDetails.value = newMusic;
    currentAudio.value.src = musicObject.songSrc;
    currentAudio.value.play();
    isAudioPlaying.value = true;
  }

  return {
    currentMusicDetails,
    isAudioPlaying,
    currentAudio,
    handleAudioPlay,
    handlePreviousSong,
    handleNextSong,
  };
};

export default usePlaySong;
