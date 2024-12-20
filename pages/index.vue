<script setup lang="ts">
import { useNotesStore } from '@/stores/useNotesStore'

const notesStore = useNotesStore()

</script>

<template>
  <section class="section">
    <div class="link__container">
      <NuxtLink to="/edit" class="link">
       Редактировать заметки
      </NuxtLink>
    </div>
    <NotesList/>
  </section>
</template>

<style lang="scss" scoped>

   .link__container {
    display: flex;
    gap: px-to-rem(20px);
    justify-content: center;
    padding: px-to-rem(20px);
    border: 1px solid hex-to-rgba($color-main, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    justify-self: center;
    border-radius: px-to-rem(10px);
    padding: px-to-rem(10px);
    font-size: 1.5rem;

    justify-content: center;
    align-items: center;
  }

  .link {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 15px;
  color: $color-text-main;
}

</style>
