<script setup lang="ts">
import { useNotesStore } from "@/stores/useNotesStore";

const notesStore = useNotesStore();
</script>

<template>
  <section class="section">
    <div class="link__container">
      <NuxtLink to="/edit" class="link"> Редактировать заметки </NuxtLink>
    </div>
    <NotesList />
  </section>
</template>
<style lang="scss" scoped></style>
