<template>
  <div class="notes-item">
    <AddButton 
    @add="addTodo" 
    btnText="Добавить задачу"
    />
    <TodoList></TodoList>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodoStore'
import AddButton from './AddButton.vue'

const store = useTodoStore()
const { addTodo } = store
</script>

<style>
  .notes-item {
    display: flex;
    flex-direction: column;
    gap: px-to-rem(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }


</style>