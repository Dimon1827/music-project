<script setup lang="ts">
import styles from "./collection-item/Collection.module.scss";
import CollectionItem from "./collection-item/CollectionItem.vue";
import TopWrapper from "../top-wrapper/TopWrapper.vue";
import collections from "./collections-data";
</script>

<template>
  <section :class="styles.collections">
    <TopWrapper :text="'Top Collection'" />
    <ul :class="styles.collectionList">
      <CollectionItem
        v-for="(collection, index) in collections"
        :key="index"
        :collection="collection"
      />
    </ul>
  </section>
</template>

<style scoped></style>
