<script setup lang="ts">
import styles from "./MyMusic.module.scss";
import Favorite from '@/assets/icons/favorite.svg';
import type { ISong } from "@/types";
const props = defineProps<{ item: ISong }>();
const { item } = props;
</script>
<template>
  <li :class="styles.myMusicItem">
    <img :class="styles.image" :src="item.image" :alt="item.name" />
    <div :class="styles.textWrapper">
      <h2 :class="styles.title">{{ item.name }}</h2>
      <span :class="styles.text">{{ item.artist }}</span>
    </div>
    <div :class="styles.rightWrapper">
      <span :class="styles.time">{{ item.time }}</span>
      <button>
        <Favorite
          :class="[styles.favoriteImage, { [styles.active]: item.isFavorite }]"
          alt="В любимые"
          width="28"
          height="24"
        />
      </button>
      <button :class="styles.triplet"></button>
    </div>
  </li>
</template>
