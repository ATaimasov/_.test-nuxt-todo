import { ref } from 'vue'
import { defineStore } from 'pinia'
import { uid } from 'uid'

export function createCollectionStore(storeName, localStorageKey, initialItems) {
  return defineStore(storeName, () => {
    const list = ref(initialItems)

    function loadItems() {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(localStorageKey)
        if (saved) {
          list.value = JSON.parse(saved)
        }
      }
    }

    function saveItems() {
      if (typeof window !== 'undefined') {
        localStorage.setItem(localStorageKey, JSON.stringify(list.value))
      }
    }

    onMounted(() => {
      loadItems()
    })

    function addItem() {
      const newNote = {
        id: uid(),
        title: `Заметка`,
        completed: false,
        todos: []
      }

      list.value.push(newNote)
      saveItems()
    }

    function addTodo(noteId, todoTitle) {
      const note = list.value.find(note => note.id === noteId)
      if (note) {
        const newTodo = {
          id: uid(),
          title: todoTitle,
          completed: false
        }

        note.todos.push(newTodo)
        saveItems()
      }
    }

    function completeTodo(noteId, todoId) {
      const note = list.value.find(note => note.id === noteId)
      if (note) {
        const todo = note.todos.find(todo => todo.id === todoId)
        if (todo && todo.title) {
          todo.completed = !todo.completed
          saveItems()
        }
      }
    }

    function removeTodo(noteId, todoId) {
      const note = list.value.find(note => note.id === noteId)
      if (note) {
        note.todos = note.todos.filter(todo => todo.id !== todoId)
        saveItems()
      }
    }

    function removeItem(id) {
      if (confirm('Вы уверены, что хотите удалить эту заметку?')) {
        list.value = list.value.filter(item => item.id !== id)
        saveItems()
      }
    }

    function completeItem(item) {
      item.completed = !item.completed
      saveItems()
    }

    function updateTodo(noteId, todoId, newTitle) {
      const note = list.value.find(note => note.id === noteId)
      if (note) {
        const todo = note.todos.find(todo => todo.id === todoId)
        if (todo) {
          todo.title = newTitle
          saveItems()
        }
      }
    }

    return { 
      list, 
      addItem, 
      addTodo,
      completeTodo,
      removeTodo,
      removeItem,
      completeItem,
      updateTodo
    }
  })
}