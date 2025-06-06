<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Collection.module.scss";
import type { ICollectionItem } from "@/types";

const props = defineProps<{ collection: ICollectionItem }>();
const { collection } = props;
</script>

<template>
  <li :class="styles.menuItem">
    <RouterLink :class="styles.menuLink" :to="collection.to">
      <img
        :class="styles.collectionImage"
        :src="collection.image"
        :alt="collection.name"
        width="94"
        height="94" />
      <button :class="styles.button"></button
    ></RouterLink>
  </li>
</template>

<style scoped></style>
