<script>
import Collections from "./collections/Collections.vue";

export default {
  name: "Home",
  components: { Collections },
};
</script>

<template lang="">
  <!-- <PromoBanner /> -->
  <!-- <TopArtists /> -->
  <div style="display: flex; justifycontent: space-between; width: 724px; marginleft: 31px">
    <Collections />
    <!-- <TopGenre /> -->
  </div>
</template>

<style scoped></style>
