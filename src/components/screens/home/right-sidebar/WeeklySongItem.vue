<script setup lang="ts">
import type { ISong } from "@/types";
import styles from "./Weekly.module.scss";

const props = defineProps<{ weeklySong: ISong }>();
const { weeklySong } = props;
</script>
<template>
  <li :class="styles.weeklyItem">
    <span :class="styles.number">0{{ weeklySong.id }}</span>
    <img
      :class="styles.image"
      :src="weeklySong.image"
      :alt="weeklySong.name"
      width="50"
      height="50"
    />
    <div :class="styles.textWrapper">
      <h2 :class="styles.title">{{ weeklySong.name }}</h2>
      <p :class="styles.text">{{ weeklySong.artist }}</p>
    </div>
    <p :class="styles.time">{{ weeklySong.time }}</p>
    <img
      :class="styles.settings"
      src="/icons/ic-list.svg"
      alt="Больше настройков"
      width="18"
      height="6"
    />
  </li>
</template>
