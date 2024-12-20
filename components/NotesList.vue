<template>
  <div class="notes-list">
        <div v-if="notesStore.list.length > 0" 
        class="notes-list-container"
        >
            <div   
            v-for="note in notesStore.list" 
            :key="note.id"
             >
                <NotesItem>
                    <CompleteIcon 
                    @click="notesStore.completeItem(note)"
                    :style="getCompleteIconStyle(note)"
                    />
                     <input 
                     :disabled="note.completed"
                     :style = "getInputStyle(note)"
                     type="text"
                     v-model="note.title"
                     placeholder="Добавить задачу"
                     @keyup.enter="notesStore.addItem"
                     >
                    <RemoveButton @remove="notesStore.removeItem(note.id)"/>
                </NotesItem>
            </div>
        </div>
        <div v-else>
            <h3>Список заметок пуст</h3>
        </div>
    </div>
</template>

<script setup>

import { useNotesStore } from '~/stores/useNotesStore'

import { computed } from 'vue'

const notesStore = useNotesStore()


const getCompleteIconStyle = computed(() => (note) => {
    if (note.title === '') {
      return { color: 'gray' }
    } else if (note.completed) {
      return { color: 'green' }
    }  else {
      return { color: 'black' }
    }
})

const getInputStyle = computed(() => (note) => ({
  textDecoration: note.completed ? 'line-through' : 'none',
  color: note.title === '' ? 'gray' : 'inherit'
}))

</script>

<style lang="scss" scoped>

.notes-list {
    display: flex;
    flex-direction: column;
    gap: px-to-rem(25px);
    overflow-x: auto;
    scrollbar-color: #ccc transparent;
    scrollbar-width: thin;

    &-container {
        display: flex;
        flex-direction: column;
        gap: px-to-rem(20px);
    }
}

input {
    border: 1px solid #ccc;
    width: 80%;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
}


</style>