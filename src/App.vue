<script setup lang="ts">
import { RouterView } from "vue-router";
import styles from "./App.module.scss";
import Header from "./components/layout/header/Header.vue";
import Menu from "./components/layout/menu/Menu.vue";
import RightSidebar from "./components/screens/home/right-sidebar/RightSidebar.vue";
</script>

<template>
  <div :class="styles.container">
    <Header />
    <Menu />
    <RouterView />
    <RightSidebar />
  </div>
</template>
