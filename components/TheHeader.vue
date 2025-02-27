<template>
  <div class="header-container">
    <a href="https://github.com/ATaimasov" target="_blank" class="link">
      <Logo class="header__logo logo"></Logo>
    </a>
    <ul class="header__list">
      <NuxtLink to="/edit" class="link" v-if="route.name !== 'edit'">
        <li class="header__list-item">Редактировать</li>
      </NuxtLink>
      <li
        v-if="route.name === 'edit'"
        @click="notesStore.addItem()"
        class="header__list-item link"
      >
        Создать заметку
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useNotesStore } from "~/stores/useNotesStore";

const route = useRoute();
const notesStore = useNotesStore();
</script>

<style lang="scss" scoped>
.link {
  font-size: px-to-rem(18px);
  color: $color-text-main;
}

.header__list {
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: $screen-md) {
    gap: avg(10px, 20px);
  }
  @media screen and (min-width: $screen-md) {
    gap: 20px;
  }
}
</style>
