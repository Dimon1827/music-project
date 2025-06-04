<script lang="ts">
import { RouterLink } from "vue-router";
import styles from "./Collection.module.scss";
import { defineComponent, type PropType } from "vue";
import type { IListItem } from "@/types";

interface ICollectionItem extends IListItem {
  image: string;
}

export default defineComponent({
  name: "CollectionItem",
  props: {
    collection: {
      type: Object as PropType<ICollectionItem>,
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
    <RouterLink :class="$styles.menuLink" :to="collection.to">
      <img
        :class="$styles.collectionImage"
        :src="collection.image"
        :alt="collection.name"
        width="94"
        height="94" />
      <button :class="$styles.button"></button
    ></RouterLink>
  </li>
</template>

<style scoped></style>
