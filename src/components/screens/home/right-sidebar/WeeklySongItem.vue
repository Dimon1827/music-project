<script setup lang="ts">
import type { ISong } from "@/types";
import styles from "./Weekly.module.scss";
import { ref } from "vue";
import AdditionalFunctions from "@/components/UI/additional-functions/AdditionalFunctions.vue";
import { useMusicStore } from "@/stores/useMusicStore";
import { storeToRefs } from "pinia";

const props = defineProps<{ weeklySong: ISong; index: number }>();
const { weeklySong, index } = props;

const isShow = ref(false);

const handleToggleComponent = () => {
  isShow.value = !isShow.value;
};
const { updateIndex } = useMusicStore();
</script>
<template>
  <li :class="styles.weeklyItem">
    <span :class="styles.number">0{{ index }}</span>
    <img
      :class="styles.image"
      :src="weeklySong.image"
      :alt="weeklySong.name"
      width="50"
      height="50"
    />
    <div :class="styles.textWrapper" @click="updateIndex(weeklySong.id - 1)">
      <h2 :class="styles.title">{{ weeklySong.name }}</h2>
      <p :class="styles.text">{{ weeklySong.artist }}</p>
    </div>
    <p :class="styles.time">{{ weeklySong.time }}</p>
    <img
      :class="styles.settings"
      src="/icons/ic-list.svg"
      alt="Больше настройков"
      width="18"
      height="6"
      @click="handleToggleComponent"
    />
    <AdditionalFunctions :id="weeklySong.id" :weeklySong="weeklySong" v-model:isShow="isShow" />
  </li>
</template>
