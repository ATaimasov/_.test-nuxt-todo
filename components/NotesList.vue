<template>
  <div class="notes-list">
    <div v-if="notesStore.list.length > 0" class="notes-list__container">
      <div class="note__container" v-for="note in notesStore.list" :key="note.id">
        <div class="note-header">
            <div class="note-header__utilities">
                <Button 
                btnClass="delete"
                @action="notesStore.removeItem(note.id)"
                />
                <Button
                v-if="route.name === 'edit'"
                btnClass="add"
                @action="notesStore.addItem()" 
                />
            </div>
            <input 
              class="note-header__title"
              type="text" 
              v-model="note.title"
              placeholder="Заметка"
              :disabled="route.name !== 'edit'"
            >
        </div>
        <div class="todo__container">
            <TodoList :noteId="note.id" />
        </div>
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
import TodoList from './TodoList.vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const notesStore = useNotesStore()

</script>

<style lang="scss" scoped>


.notes-list {
  display: flex;
  flex-direction: column;
  gap: px-to-rem(25px);
  align-items: center;

  &__container {
    display: flex;
    flex-direction: column;
    gap: px-to-rem(20px);
    width: 90%;
  }
}

.note {

  &__container {
    display: flex;
    flex-direction: column;
    gap: px-to-rem(10px);
    justify-content: center;
    padding: px-to-rem(20px);
    border: 1px solid hex-to-rgba($color-main, 0.3);
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.31);
    border-radius: 10px;

    &:last-child {
      margin-bottom: px-to-rem(10px);
    }

    &:first-child {
      margin-top: px-to-rem(10px);
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__utilities {
        display: flex;
        gap: px-to-rem(10px);
        justify-content: center;
        align-items: center;

        & > * {
            display: flex;
            justify-content: center;
            align-items: center;

            scale: 1.2;
        }
    }

    &__title {
        font-size: px-to-rem(20px);
        font-weight: 600;
        text-align: right;
        background: transparent;
        border: none;
        color: white;
        outline: none;

        &::placeholder {
            color: white;
        }
    }
  }
}


input {
  border: 1px solid #ccc;
  width: 80%;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
}

.todo {
    &__container {
        display: flex;
        flex-direction: column;
        gap: px-to-rem(20px);
    }
}
</style>