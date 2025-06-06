<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "../Menu.module.scss";
import type { IListItem } from "@/types";
const props = defineProps<{ item: IListItem }>();
const { item } = props;
</script>

<template>
  <li :class="styles.menuItem">
    <RouterLink :class="styles.menuLink" :to="item.to">{{ item.name }}</RouterLink>
  </li>
</template>

<style scoped></style>
