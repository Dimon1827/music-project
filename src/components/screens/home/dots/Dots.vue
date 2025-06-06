<script setup lang="ts">
import styles from "./Dots.module.scss";
</script>

<template>
  <div :class="styles.dots">
    <button
      v-for="i in 6"
      :key="i"
      :class="{ [styles.dot]: true, [styles.active]: i === 2 }"
      type="button"
      :data-id="i - 1"
    ></button>
  </div>
</template>

<style scoped></style>
