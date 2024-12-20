import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { uid } from 'uid'
import { onMounted } from 'vue'

export const useNotesStore = defineStore('notesStore', () => {
  const notesList = ref([
    {
      id: uid(),
      title: 'Заметка 1',
      completed: false
    },
    {
      id: uid(),
      title: 'Заметка 2',
      completed: false
    },
    {
      id: uid(),
      title: 'Заметка 3',
      completed: false
    }
  ])

  // Функция для загрузки данных из localStorage
  const loadNotes = () => {
    if (process.client) {
      try {
        const saved = localStorage.getItem('notesList')
        if (saved) {
          notesList.value = JSON.parse(saved)
        }
      } catch (e) {
        console.error('Ошибка при загрузке notesList из localStorage:', e)
      }
    }
  }

  // Загружаем данные при монтировании на клиенте
  onMounted(() => {
    loadNotes()
  })

  // Сохраняем данные при изменении
  watch(notesList, (newList) => {
    if (process.client) {
      try {
        localStorage.setItem('notesList', JSON.stringify(newList))
      } catch (e) {
        console.error('Ошибка при сохранении notesList в localStorage:', e)
      }
    }
  }, { deep: true })

  function addNote() {
    notesList.value.push({
      id: uid(),
      title: '',
      completed: false
    })
  }

  function removeNote(id) {
    notesList.value = notesList.value.filter((note) => note.id !== id)

    if (process.client && notesList.value.length === 0) {
      try {
        localStorage.removeItem('notesList')
      } catch (e) {
        console.error('Ошибка при удалении notesList из localStorage:', e)
      }
    }
  }

  function removeAllNotes() {
    notesList.value = []
    if (process.client) {
      try {
        localStorage.removeItem('notesList')
      } catch (e) {
        console.error('Ошибка при удалении notesList из localStorage:', e)
      }
    }
  }

  function removeCompletedNotes() {
    notesList.value = notesList.value.filter((note) => !note.completed)
  }

  function removeRemainingNotes() {
    notesList.value = notesList.value.filter((note) => note.completed)
  }

  return { notesList, addNote, removeNote, removeAllNotes, removeCompletedNotes, removeRemainingNotes }
})