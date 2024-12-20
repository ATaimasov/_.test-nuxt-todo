import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { uid } from 'uid'
import { onMounted } from 'vue'

export const useTodoStore = defineStore('todoStore', () => {
  const todoList = ref([
    {
      id: uid(),
      title: 'Задача 1',
      completed: false
    },
    {
      id: uid(),
      title: 'Задача 2',
      completed: false
    },
    {
      id: uid(),
      title: 'Задача 3',
      completed: false
    }
  ])


  // Функция для загрузки данных из localStorage
  const loadTodos = () => {
    if (process.client) {
      try {
        const saved = localStorage.getItem('todoList')
        if (saved) {
          todoList.value = JSON.parse(saved)
        }
      } catch (e) {
        console.error('Ошибка при загрузке todoList из localStorage:', e)
      }
    }
  }

  // Загружаем данные при монтировании на клиенте
  onMounted(() => {
    loadTodos()
  })

  // Сохраняем данные при изменении
  watch(todoList, (newList) => {
    if (process.client) {
      try {
        localStorage.setItem('todoList', JSON.stringify(newList))
      } catch (e) {
        console.error('Ошибка при сохранении todoList в localStorage:', e)
      }
    }
  }, { deep: true })

  function addTodo() {
    todoList.value.push({
      id: uid(),
      title: '',
      completed: false
    })
  }

  function removeTodo(id) {
    todoList.value = todoList.value.filter((todo) => todo.id !== id)

    if (process.client && todoList.value.length === 0) {
      try {
        localStorage.removeItem('todoList')
      } catch (e) {
        console.error('Ошибка при удалении todoList из localStorage:', e)
      }
    }
  }

  function removeAllTodos() {
    todoList.value = []
    if (process.client) {
      try {
        localStorage.removeItem('todoList')
      } catch (e) {
        console.error('Ошибка при удалении todoList из localStorage:', e)
      }
    }
  }

  function removeCompletedTodos() {
    todoList.value = todoList.value.filter((todo) => !todo.completed)
  }

  function removeRemainingTodos() {
    todoList.value = todoList.value.filter((todo) => todo.completed)
  }

  return { todoList, addTodo, removeTodo, removeAllTodos, removeCompletedTodos, removeRemainingTodos }
})