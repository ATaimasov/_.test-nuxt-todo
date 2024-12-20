import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { uid } from 'uid'
import { onMounted } from 'vue'

export function createListStore(storeName, localStorageKey, initialItems) {
  return defineStore(storeName, () => {
    const list = ref(initialItems)

    const loadItems = () => {
      if (process.client) {
        try {
          const saved = localStorage.getItem(localStorageKey)
          if (saved) {
            list.value = JSON.parse(saved)
          }
        } catch (e) {
          console.error(`Ошибка при загрузке ${localStorageKey} из localStorage:`, e)
        }
      }
    }

    onMounted(() => {
      loadItems()
    })

    watch(list, (newList) => {
      if (process.client) {
        try {
          localStorage.setItem(localStorageKey, JSON.stringify(newList))
        } catch (e) {
          console.error(`Ошибка при сохранении ${localStorageKey} в localStorage:`, e)
        }
      }
    }, { deep: true })

    function addItem() {
      list.value.push({
        id: uid(),
        title: `Заметка ${list.value.length + 1}`,
        completed: false
      })
    }

    function completeItem(item) {
      if (item.title !== '') {
        item.completed = !item.completed
      }
    }

    function removeItem(id) {
      list.value = list.value.filter((item) => item.id !== id)

      if (process.client && list.value.length === 0) {
        try {
          localStorage.removeItem(localStorageKey)
        } catch (e) {
          console.error(`Ошибка при удалении ${localStorageKey} из localStorage:`, e)
        }
      }
    }

    function removeAllItems() {
      list.value = []
      if (process.client) {
        try {
          localStorage.removeItem(localStorageKey)
        } catch (e) {
          console.error(`Ошибка при удалении ${localStorageKey} из localStorage:`, e)
        }
      }
    }

    function removeCompletedItems() {
      list.value = list.value.filter((item) => !item.completed)
    }

    function removeRemainingItems() {
      list.value = list.value.filter((item) => item.completed)
    }

    return { list, addItem, removeItem, removeAllItems, removeCompletedItems, removeRemainingItems, completeItem }
  })
}