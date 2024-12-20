<template>
    <div class="todo-list">
        <div v-if="todoStore.list.length > 0" >
            <div   v-for="todo in todoStore.list" :key="todo.id" >
                <TodoItem>
                    <CompleteIcon 
                    @click="todoStore.completeItem(todo)"
                    :style="getCompleteIconStyle(todo)"
                    />
                     <input 
                     :disabled="todo.completed"
                     :style = "getInputStyle(todo)"
                     type="text"
                     v-model="todo.title"
                     placeholder="Добавить задачу"
                     @keyup.enter="todoStore.addItem"
                     >
                    <RemoveButton @remove="todoStore.removeItem(todo.id)"/>
                </TodoItem>
            </div>
        </div>
        <div v-else>
            <h3>Список задач пуст</h3>
        </div>
    </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useTodoStore } from '~/stores/useTodoStore'

import { computed } from 'vue'

const todoStore = useTodoStore()


const getCompleteIconStyle = computed(() => (todo) => {
    if (todo.title === '') {
      return { color: 'gray' }
    } else if (todo.completed) {
      return { color: 'green' }
    }  else {
      return { color: 'black' }
    }
})

const getInputStyle = computed(() => (todo) => ({
  textDecoration: todo.completed ? 'line-through' : 'none',
  color: todo.title === '' ? 'gray' : 'inherit'
}))



</script>

<style>

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: auto;
    max-height: 92%;
    scrollbar-color: #ccc transparent;
    scrollbar-width: thin;
}

input {
    border: 1px solid #ccc;
    width: 80%;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
}


</style>