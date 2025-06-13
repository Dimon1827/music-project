import { onMounted, ref } from "vue";
import axios from "axios";
import type { ISong } from "@/types";

function useFetchData() {
  const musicData = ref<ISong[]>();
  const error = ref();
  const isLoading = ref(true);

  const fetchData = async () => {
    try {
      const apiUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=38eac089&format=jsonpretty&limit=4&groupby=artist_id`;
      const response = await axios.get(apiUrl);
      musicData.value = response.data.results.map((track: any) => ({
        id: Number(track.id),
        name: track.name,
        image: track.image,
        artist: track.artist_name,
        songSrc: track.audio,
        time: `${Math.floor(track.duration / 60)}:${
          Math.floor(track.duration % 60) < 10
            ? `0${Math.floor(track.duration % 60)}`
            : Math.floor(track.duration % 60)
        }`,
        isFavorite: false,
      }));
    } catch (error: any) {
      error.value = "Произошла ошибка";
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });

  return { musicData, error, isLoading };
}

export default useFetchData;
