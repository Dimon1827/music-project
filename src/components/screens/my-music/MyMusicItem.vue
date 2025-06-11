<script setup lang="ts">
import styles from "./MyMusic.module.scss";
import Favorite from "@/assets/icons/favorite.svg";
import type { ISong } from "@/types";
import AdditionalFunctions from "@/components/UI/additional-functions/AdditionalFunctions.vue";
import { ref } from "vue";
import { useMusicStore } from "@/stores/useMusicStore";
const props = defineProps<{ weeklySong: ISong }>();
const { weeklySong } = props;
const isShow = ref(false);

const handleToggleComponent = () => {
  isShow.value = !isShow.value;
};

const { toggleFavorite, updateIndex } = useMusicStore();

</script>
<template>
  <li :class="styles.myMusicItem">
    <img :class="styles.image" :src="weeklySong.image" :alt="weeklySong.name" />
    <div :class="styles.textWrapper" @click="updateIndex(weeklySong.id - 1)">
      <h2 :class="styles.title">{{ weeklySong.name }}</h2>
      <span :class="styles.text">{{ weeklySong.artist }}</span>
    </div>
    <div :class="styles.rightWrapper">
      <span :class="styles.time">{{ weeklySong.time }}</span>
      <button>
        <Favorite
          :class="[styles.favoriteImage, { [styles.active]: weeklySong.isFavorite }]"
          alt="В любимые"
          width="28"
          height="24"
          @click="toggleFavorite(weeklySong.id)"
        />
      </button>
      <img
        :class="styles.additionalFunctions"
        src="/icons/triplet.svg"
        alt="Дополнительные функции"
        @click="handleToggleComponent"
      />
      <AdditionalFunctions :id="weeklySong.id" :weeklySong="weeklySong" v-model:isShow="isShow" />
    </div>
  </li>
</template>
