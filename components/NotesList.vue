<template>
  <div class="notes-list">
        <div v-if="notesList.length > 0" 
        class="notes-list-container"
        >
            <div   
            v-for="note in notesList" 
            :key="note.id"
             >
                <NotesItem>
                    <CompleteIcon 
                    @click="completeNote(note)"
                    :style="getCompleteIconStyle(note)"
                    />
                     <input 
                     :disabled="note.completed"
                     :style = "getInputStyle(note)"
                     type="text"
                     v-model="note.title"
                     placeholder="Добавить задачу"
                     @keyup.enter="addNote"
                     >
                    <RemoveButton @remove="removeNote(note.id)"/>
                </NotesItem>
            </div>
        </div>
        <div v-else>
            <h3>Список заметок пуст</h3>
        </div>
    </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useNotesStore } from '~/stores/useNotesStore'

import { computed } from 'vue'

const store = useNotesStore()
const { notesList} = storeToRefs(store)
const { addNote, removeNote } = store



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

const completeNote = (note) => {
    if(note.title !== '') {
        note.completed = !note.completed
    }
}


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