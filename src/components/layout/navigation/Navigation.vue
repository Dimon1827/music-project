<script setup lang="ts">
import NavigationItem from "./navigation-item/NavigationItem.vue";
import styles from "./Navigation.module.scss";
import navigationData from "./navigation-data";
const items = navigationData;
</script>

<template>
  <nav>
    <ul :class="styles.navigationList">
      <NavigationItem v-for="item in items" :key="item.id" :item="item"   />
    </ul>
  </nav>
</template>

<style scoped></style>
