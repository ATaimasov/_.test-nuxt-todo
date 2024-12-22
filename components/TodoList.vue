<template>
  <div class="todo-list">
    <div v-if="todos && todos.length > 0"
      class="todo-list__container"
      >
      <div v-for="todo in todos" :key="todo.id"
      
      >
        <TodoItem
        >
          <CompleteIcon 
            v-if="route.name === 'edit'"
            @click="completeTodo(todo.id)"
            :style="getCompleteIconStyle(todo)"
          />
          <input 
            :disabled="todo.completed || route.name !== 'edit'"
            :style="getInputStyle(todo)"
            type="text"
            v-model="todo.title"
            :placeholder="route.name === 'edit' ? 'Добавить задачу' : 'Задача не добавлена'"
            @keyup.enter="addTodo"
            @input="updateTodo(todo.id, $event.target.value)"
          >
          <Button 
            v-if="route.name === 'edit'"
            @action="removeTodo(todo.id)"
            btnClass="delete"
          />
        </TodoItem>
      </div>
    </div>
    <div v-else
    class="empty-list"
    >
      <h3>Список задач пуст</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNotesStore } from '~/stores/useNotesStore'
import { useRoute } from 'vue-router'
import TodoItem from './TodoItem.vue'
import CompleteIcon from './CompleteIcon.vue'
import Button from './Button.vue'

const props = defineProps({
  noteId: {
    type: String,
    required: true
  }
})

const route = useRoute();
const notesStore = useNotesStore()

const todos = computed(() => {
  const note = notesStore.list.find(note => note.id === props.noteId)
  return note ? note.todos : []
})

const getCompleteIconStyle = computed(() => (todo) => {
  if (todo.title === '') {
    return { color: 'gray', cursor: 'not-allowed' }
  } else if (todo.completed) {
    return { color: 'green' }
  } else {
    return { color: 'black' }
  }
})

const getInputStyle = computed(() => (todo) => ({
  textDecoration: todo.completed ? 'line-through' : 'none',
  color: todo.title === '' ? 'gray' : 'inherit',
  width: route.name === 'edit' ? '80%' : '100%'
}))

function addTodo() {
  notesStore.addTodo(props.noteId, '')
}

function completeTodo(todoId) {
  notesStore.completeTodo(props.noteId, todoId)
}

function removeTodo(todoId) {
  notesStore.removeTodo(props.noteId, todoId)
}

function updateTodo(todoId, newTitle) {
  notesStore.updateTodo(props.noteId, todoId, newTitle)
}
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: px-to-rem(10px);
  scrollbar-color: #ccc transparent;
  scrollbar-width: thin;
  

  &__container {
    display: flex;
    flex-direction: column;
    gap: px-to-rem(10px);
  }
}

input {
  border: 1px solid #ccc;
  width: 80%;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
}


.empty-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: px-to-rem(10px);
  padding: px-to-rem(10px);
}
</style>