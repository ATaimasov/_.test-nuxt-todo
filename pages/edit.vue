<script setup lang="ts">
import { useNotesStore } from '@/stores/useNotesStore'

const notesStore = useNotesStore()

</script>

<template>
  <section class="section">
    <NuxtLink to="/" class="link">
      <BackButton 
      class="add-note"
      btnText="Вернуться на главную"
      />
    </NuxtLink>
    <NotesList
    />
  </section>
</template>

<style lang="scss" scoped>
  .section {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 10vh 1fr;
    width: 50%;
    gap: px-to-rem(20px);
  }
 
  .add-note {
    border: 1px solid hex-to-rgba($color-main, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    justify-self: center;
    border-radius: px-to-rem(10px);
    padding: px-to-rem(10px);
    font-size: 1.5rem;

    justify-content: center;
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
