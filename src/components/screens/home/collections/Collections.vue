<script lang="ts">
import styles from "./collection-item/Collection.module.scss";
import { defineComponent } from "vue";
import CollectionItem from "./collection-item/CollectionItem.vue";
import collectionData from "./collections-data";
import TopWrapper from "../top-wrapper/TopWrapper.vue";
export default defineComponent({
  name: "Collections",
  components: { TopWrapper, CollectionItem },
  data() {
    return {
      collections: collectionData,
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
  <section :class="$styles.collections">
    <TopWrapper :text="'Top Collection'" />
    <ul :class="$styles.collectionList">
      <CollectionItem
        v-for="(collection, index) in collections"
        :key="index"
        :collection="collection"
      />
    </ul>
  </section>
</template>

<style scoped></style>
