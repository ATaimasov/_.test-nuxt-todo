<template>
  <div class="notes-item">
    <AddButton 
    @add="todoStore.addItem" 
    btnText="Добавить задачу"
    />
    <TodoList></TodoList>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/useTodoStore'
import AddButton from './AddButton.vue'

const todoStore = useTodoStore()
</script>

<style>
  .notes-item {
    display: flex;
    flex-direction: column;
    gap: px-to-rem(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }


</style>