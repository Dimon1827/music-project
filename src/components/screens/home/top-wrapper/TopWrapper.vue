<template lang="">
  <div :class="$styles.topWrapper">
    <h2 :class="$styles.title">{{text}}</h2>
    <p :class="$styles.moreText">More list</p>
  </div>
</template>
<script lang="ts">
import styles from "./TopWrapper.module.scss";

export default {
  name: 'TopWrapper',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    $styles() {
      return styles;
    },
  },
};
</script>
<style lang=""></style>
