<script lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Menu.module.scss";
import { defineComponent, type PropType } from "vue";
import MenuItem from "./menu-item/MenuItem.vue";
import { menu, library, playlist, others } from "./menu-data";
export default defineComponent({
  name: "Menu",
  components: { MenuItem },
  data() {
    return {
      menuItems: menu,
      libraryItems: library,
      playlistItems: playlist,
      othersItems: others,
    };
  },
  computed: {
    $styles() {
      return styles;
    },
  },
});
</script>

<template>
  <div :class="$styles.menuContainer">
    <img
      :class="$styles.logo"
      src="/icons/logo.svg"
      alt="Лого Mytones"
      width="131"
      height="24"
    />
    <div :class="$styles.menuWrapper">
      <h2 :class="$styles.title">Menu</h2>
      <ul :class="$styles.menuList">
        <MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
      </ul>
      <h2 :class="$styles.title">Library</h2>
      <ul :class="$styles.menuList">
        <MenuItem v-for="(item, index) in libraryItems" :key="index" :item="item" />
      </ul>
      <h2 :class="$styles.title">Playlist</h2>
      <ul :class="$styles.menuList">
        <MenuItem v-for="(item, index) in playlistItems" :key="index" :item="item" />
      </ul>
      <h2 :class="$styles.title">Others</h2>
      <ul :class="$styles.menuList">
        <MenuItem v-for="(item, index) in othersItems" :key="index" :item="item" />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
