<script>
import Notification from "@/assets/icons/notif.svg";
import Favorites from "@/assets/icons/like.svg";
import styles from "./Header.module.scss";
import Navigation from "../navigation/Navigation.vue";
export default {
  name: "Header",
  components: { Notification, Favorites, Navigation },
  computed: {
    $styles() {
      return styles;
    },
  },
};
</script>

<template lang="">
  <div :class="$styles.headerContainer">
    <Navigation />
    <div :class="$styles.searchWrapper">
      <input :class="$styles.searchInput" type="text" placeholder="Search" />
    </div>
    <div :class="$styles.profileContainer">
      <div :class="$styles.profileWrapper">
        <Favorites :class="$styles.profileFavorites" />
        <Notification :class="$styles.profileNotification" />
        <img
          :class="$styles.profileImage"
          src="/images/dog.jpg"
          alt="Аватарка пользователя"
          width="42"
          height="42"
        />
        <p :class="$styles.profileName">Dima Drogalov</p>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
