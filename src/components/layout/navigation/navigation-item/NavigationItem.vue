<script lang="ts">
import { RouterLink } from "vue-router";
import styles from "./NavigationItem.module.scss";
import { defineComponent, type PropType } from "vue";
import type { IListItem } from "@/types";
export default defineComponent({
  name: "NavigationItem",
  props: {
    item: {
      type: Object as PropType<IListItem>,
      required: true,
    },
  },
  computed: {
    $styles() {
      return styles;
    },
  },
});
</script>

<template>
  <li>
    <RouterLink :class="$styles.navigationLink" :to="item.to">{{ item.name }}</RouterLink>
  </li>
</template>

<style scoped></style>
