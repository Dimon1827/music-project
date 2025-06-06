<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Genre.module.scss";
import type { IListItem } from "@/types";

const props = defineProps<{ genre: IListItem }>();
const { genre } = props;
</script>
<template>
  <li :class="styles.genreItem">
    <RouterLink :class="styles.genreLink" :to="genre.to"> {{ genre.name }} </RouterLink>
  </li>
</template>
