<template>
  <div class="todo-list">
    <div v-if="todos && todos.length > 0">
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem>
          <CompleteIcon 
            @click="completeTodo(todo.id)"
            :style="getCompleteIconStyle(todo)"
          />
          <input 
            :disabled="todo.completed"
            :style="getInputStyle(todo)"
            type="text"
            v-model="todo.title"
            placeholder="Добавить задачу"
            @keyup.enter="addTodo"
            @input="updateTodo(todo.id, $event.target.value)"
          >
          <RemoveButton @remove="removeTodo(todo.id)"/>
        </TodoItem>
      </div>
    </div>
    <div v-else>
      <h3>Список задач пуст</h3>
    </div>
    <AddButton 
    v-if="route.name === 'edit'"
      @add="addTodo"
      btnText="Добавить задачу"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNotesStore } from '~/stores/useNotesStore'
import { useRoute } from '#app'

const props = defineProps({
  noteId: {
    type: String,
    required: true
  }
})

const route = useRoute();
console.log(' ',  route.name)

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
  color: todo.title === '' ? 'gray' : 'inherit'
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
  gap: 20px;
  scrollbar-color: #ccc transparent;
  scrollbar-width: thin;
  padding: px-to-rem(20px);
}

input {
  border: 1px solid #ccc;
  width: 80%;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
}
</style>