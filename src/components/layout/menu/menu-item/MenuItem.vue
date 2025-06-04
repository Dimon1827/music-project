<script lang="ts">
import { RouterLink } from "vue-router";
import styles from "../Menu.module.scss";
import { defineComponent, type PropType } from "vue";
import type { IListItem } from "@/types";
export default defineComponent({
  name: "MenuItem",
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
  <li :class="$styles.menuItem">
    <RouterLink :class="$styles.menuLink" :to="item.to">{{ item.name }}</RouterLink>
  </li>
</template>

<style scoped></style>
