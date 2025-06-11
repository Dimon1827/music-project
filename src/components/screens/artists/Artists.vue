<script setup lang="ts">
import styles from "./Artists.module.scss";
import Shuffle from "@/assets/icons/shuffle.svg";
import artistsData from "./artists-data";
</script>
<template>
  <div :class="styles.artistsWrapper">
    <h1 :class="styles.mainTitle">Artists</h1>
    <div :class="styles.artistsContainer">
      <div :class="styles.leftBlock">
        <div :class="styles.artistItem" v-for="(artist, index) in artistsData" :key="index">
          <img
            :class="styles.image"
            :src="artist.image"
            :alt="artist.name"
            width="56"
            height="56"
          />
          <p :class="styles.artist">{{ artist.name }}</p>
        </div>
      </div>
      <div :class="styles.rightBlock">
        <h2 :class="styles.artistName">Ed Sheeran</h2>
        <p :class="styles.artistsText">2 Albums, 10 Songs</p>
        <div :class="styles.buttonsContainer">
          <div :class="styles.buttonWrapper">
            <button type="button">
              <div :class="styles.playButton"></div>
            </button>
            <p :class="styles.textButton">Play</p>
          </div>
          <div :class="styles.buttonWrapper">
            <button type="button">
              <Shuffle :class="styles.shuffleImage" alt="Перемешать" width="18" height="18" />
            </button>
            <p :class="styles.textButton">Shuffle</p>
          </div>
        </div>
        <div :class="styles.albumsContainer">
          <RouterLink to="/">
            <img
              :class="styles.albumImage"
              src="/images/albums/wendy.webp"
              alt="Afterglow"
              width="144"
              height="144"
            />
            <h3 :class="[styles.subTitle, styles.albumName]">Afterglow</h3>
            <p :class="styles.date">2020</p>
          </RouterLink>
          <RouterLink to="/">
            <img
              :class="styles.albumImage"
              src="/images/albums/wendy.webp"
              alt="album.name"
              width="144"
              height="144"
            />
            <h3 :class="[styles.subTitle, styles.albumName]">No.6 Collaborat..</h3>
            <p :class="styles.date">2019</p>
          </RouterLink>
        </div>
        <p :class="styles.text">See more by Ed Sheeran</p>
      </div>
    </div>
  </div>
</template>
