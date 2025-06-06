<script setup lang="ts">
import styles from "./TopWrapper.module.scss";
const props = defineProps<{ text: string }>();
</script>

<template>
  <div :class="styles.topWrapper">
    <h2 :class="styles.title">{{ props.text }}</h2>
    <p :class="styles.moreText">More list</p>
  </div>
</template>

<style lang=""></style>
