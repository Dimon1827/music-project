<script setup lang="ts">
import Dots from "../dots/Dots.vue";
import styles from "./PromoBanner.module.scss";
</script>

<template>
  <section :class="styles.promoBanner">
    <div :class="styles.promoBannerContainer">
      <div :class="styles.promoBannerWrapper">
        <h1 :class="styles.title">our features</h1>
        <p :class="styles.mainText">get premium access & Unlock All Popular Songs</p>
        <div :class="styles.buttonWrapper">
          <button :class="styles.button">Getting Now</button>
          <a :class="styles.promoBannerLink" href="#"> 1 Month Free Trial </a>
        </div>
      </div>
      <Dots />
    </div>
  </section>
</template>

<style lang=""></style>
