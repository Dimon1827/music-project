<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./NavigationItem.module.scss";
import type { IListItem } from "@/types";
const props = defineProps<{ item: IListItem }>();
const { item } = props;
</script>

<template>
  <li>
    <RouterLink :class="styles.navigationLink" :to="item.to">{{ item.name }}</RouterLink>
  </li>
</template>

<style scoped></style>
