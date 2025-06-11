<script setup lang="ts">
import TopWrapper from "../top-wrapper/TopWrapper.vue";
import WeeklySong from "./WeeklySong.vue";
import styles from "./Weekly.module.scss";
import Player from "./player/Player.vue";
</script>
<template>
  <section :class="styles.RightSidebar">
    <div :class="styles.WeeklyWrapper">
      <TopWrapper :text="'Top 100 Weekly'" />
      <WeeklySong />
    </div>
    <Player />
  </section>
</template>
