import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import weeklySong from "@/components/screens/home/right-sidebar/weeklySongData";
import type { ISong } from "@/types";
import useFetchData from "@/hooks/useFetchData";
export const useMusicStore = defineStore("musicStore", () => {
  const { musicData, isLoading } = useFetchData();
  const currentTrackIndex = ref(0);
  const myMusic = ref<ISong[]>([]);
  const activePlaylist = ref<ISong[]>(weeklySong);
  const favoriteMusics = computed(() => {
    return myMusic.value.filter((song) => song.isFavorite);
  });

  watch(
    () => musicData.value,
    (newData) => {
      if (newData?.length) {
        activePlaylist.value = newData;
      }
    },
    { immediate: true }
  );

  const toggleFavorite = (id: number) => {
    const song = myMusic.value.find((song) => song.id === id);
    if (song) {
      song.isFavorite = !song.isFavorite;
    }
  };

  const setActivePlaylist = (playlist: ISong[]) => {
    activePlaylist.value = playlist;
    currentTrackIndex.value = 0;
  };

  function updateIndex(index: number) {
    currentTrackIndex.value = index;
  }

  const addMusic = (song: ISong, id: number) => {
    const searchSong = myMusic.value.find((song) => song.id === id);
    if (searchSong) return;
    myMusic.value.push(song);
  };

  const deleteMusic = (id: number) => {
    myMusic.value = myMusic.value.filter((song) => song.id !== id);
    console.log(myMusic.value);
  };

  return {
    myMusic,
    currentTrackIndex,
    favoriteMusics,
    toggleFavorite,
    deleteMusic,
    addMusic,
    updateIndex,
    setActivePlaylist,
    activePlaylist,
    isLoading,
  };
});
