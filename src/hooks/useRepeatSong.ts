import { ref } from "vue";

const useRepeatSong = () => {
  const isMusicRepeat = ref(false);

  function handleRepeatAudio() {
    if (isMusicRepeat.value) {
      isMusicRepeat.value = false;
    } else {
      isMusicRepeat.value = true;
    }
  }

  return { isMusicRepeat, handleRepeatAudio };
};

export default useRepeatSong;

