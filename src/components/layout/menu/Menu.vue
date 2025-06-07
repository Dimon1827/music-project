<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Menu.module.scss";
import MenuItem from "./menu-item/MenuItem.vue";
import { menu, library, playlist, others } from "./menu-data";
</script>

<template>
  <div :class="styles.menuContainer">
    <RouterLink :to="'/'">
      <img :class="styles.logo" src="/icons/logo.svg" alt="Лого Mytones" width="131" height="24" />
    </RouterLink>

    <div :class="styles.menuWrapper">
      <h2 :class="styles.title">Menu</h2>
      <ul :class="styles.menuList">
        <MenuItem v-for="(item, index) in menu" :key="index" :item="item" />
      </ul>
      <h2 :class="styles.title">Library</h2>
      <ul :class="styles.menuList">
        <MenuItem v-for="(item, index) in library" :key="index" :item="item" />
      </ul>
      <h2 :class="styles.title">Playlist</h2>
      <ul :class="styles.menuList">
        <MenuItem v-for="(item, index) in playlist" :key="index" :item="item" />
      </ul>
      <h2 :class="styles.title">Others</h2>
      <ul :class="styles.menuList">
        <MenuItem v-for="(item, index) in others" :key="index" :item="item" />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
