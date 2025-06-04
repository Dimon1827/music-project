<script lang="ts">
import NavigationItem from "./navigation-item/NavigationItem.vue";
import styles from "./Navigation.module.scss";
import navigationData from "./navigation-data";
import type { IListItem } from "@/types";
import { defineComponent } from "vue";
export default defineComponent({
  components: { NavigationItem },
  data() {
    return {
      items: navigationData,
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
  <nav>
    <ul :class="$styles.navigationList">
      <NavigationItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </nav>
</template>

<style scoped></style>
