<script setup lang="ts">
import { useMusicStore } from "@/stores/useMusicStore";
import styles from "./AdditionalFunctions.module.scss";
import type { ISong } from "@/types";

const props = defineProps<{ id: number; weeklySong: ISong }>();
const { id, weeklySong } = props;
const isShow = defineModel("isShow", {
  required: true,
});
const { addMusic, deleteMusic } = useMusicStore();

const handleDeleteMusic = () => {
  deleteMusic(id);
};
const handleAddMusic = () => {
  addMusic(weeklySong, weeklySong.id);
};
</script>
<template>
  <div :class="styles.container" :style="{ display: isShow ? 'block' : 'none' }">
    <ul :class="styles.list">
      <li :class="styles.item">
        <button :class="styles.button" type="button" @click="handleAddMusic">
          Добавить в мою музыку
        </button>
      </li>
      <li :class="styles.item">
        <button :class="styles.button" type="button" @click="handleDeleteMusic">
          Удалить музыку
        </button>
      </li>
    </ul>
  </div>
</template>
