<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import styles from "./App.module.scss";
import Header from "./components/layout/header/Header.vue";
import Menu from "./components/layout/menu/Menu.vue";

export default {
  components: { Header, Menu },
  computed: {
    $styles() {
      return styles;
    },
  },
};
</script>

<template>
  <div :class="$styles.container">
    <Header />
    <Menu />
    <p>dsf</p>
    <RouterView />
  </div>
</template>

<style scoped></style>
