<script setup lang="ts">
import styles from "./Album.module.scss";
</script>
<template>
  <section :class="styles.albumWrapper">
    <div :class="styles.topWrapperTitle">
      <p :class="styles.topWrapperText">Featured Album</p>
      <p :class="styles.topWrapperAll">See All</p>
    </div>
    <swiper-container slides-per-view="3" :space-between="30">
      <swiper-slide :class="styles.slider">
        <img
          :class="styles.sliderImage"
          src="/images/albums/wendy.webp"
          alt=""
          width="338"
          height="200"
        />
        <div :class="styles.textWrapper">
          <h2 :class="styles.subtitle">Like Water - The 1st Mini Album</h2>
          <p :class="styles.text">Wendy</p>
        </div>
      </swiper-slide>
      <swiper-slide :class="styles.slider">
        <img
          :class="styles.sliderImage"
          src="/images/albums/l-rose.webp"
          alt=""
          width="338"
          height="200"
        />
        <div :class="styles.textWrapper">
          <h2 :class="styles.subtitle">-R-</h2>
          <p :class="styles.text">Rose</p>
        </div>
      </swiper-slide>
      <swiper-slide :class="styles.slider">
        <img
          :class="styles.sliderImage"
          src="/images/albums/wendy.webp"
          alt=""
          width="338"
          height="200"
        />
        <div :class="styles.textWrapper">
          <h2 :class="styles.subtitle">Like Water - The 1st Mini Album</h2>
          <p :class="styles.text">Wendy</p>
        </div>
      </swiper-slide>
      <swiper-slide :class="styles.slider">
        <img
          :class="styles.sliderImage"
          src="/images/albums/wendy.webp"
          alt=""
          width="338"
          height="200"
        />
        <div :class="styles.textWrapper">
          <h2 :class="styles.subtitle">Like Water - The 1st Mini Album</h2>
          <p :class="styles.text">Wendy</p>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>
