<script setup lang="ts">
import styles from "./Musics.module.scss";
import type { IMusicData } from "@/types";

interface IMusics {
  text: string;
  data: IMusicData[];
}

const props = defineProps<IMusics>();
const { text, data } = props;
</script>
<template>
  <section :class="styles.newMusic">
    <div :class="styles.topWrapperTitle">
      <p :class="styles.topWrapperText">{{ text }}</p>
      <p :class="styles.topWrapperAll">See All</p>
    </div>
    <swiper-container slides-per-view="4" :space-between="24">
      <swiper-slide v-for="(music, index) in data" :key="index" :class="styles.sliderElement">
        <img
          :class="styles.sliderImage"
          :src="music.image"
          :alt="music.name"
          width="145"
          height="198"
        />
        <h2 :class="styles.subtitle">{{ music.name }}</h2>
        <p :class="styles.text">{{ text }}</p>
      </swiper-slide>
    </swiper-container>
  </section>
</template>
