<template>
  <div class="notes">
    <div v-if="notesStore.list.length > 0" class="notes__content">
      <div class="notes-item" v-for="note in notesStore.list" :key="note.id">
        <div class="notes-item__header">
          <div class="notes-item__utilities">
            <Button
              btnClass="delete"
              @action="notesStore.removeItem(note.id)"
            />
            <Button
              v-if="route.name === 'edit'"
              btnClass="add"
              @action="notesStore.addTodo(note.id, '')"
            />
          </div>
          <input
            class="notes-item__title"
            type="text"
            v-model="note.title"
            placeholder="Заметка"
            :disabled="route.name !== 'edit'"
          />
        </div>
        <div class="todo__container">
          <TodoList :noteId="note.id" />
        </div>
      </div>
    </div>
    <div class="notes__empty" v-else>
      <h3>Список заметок пуст</h3>
      <Button
        v-if="route.name === 'edit'"
        btnClass="add"
        @action="notesStore.addItem()"
      />
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from "~/stores/useNotesStore";
import { computed } from "vue";
import TodoList from "./TodoList.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const notesStore = useNotesStore();

function addTodo() {
  notesStore.addTodo(noteId, "");
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: px-to-rem(25px);
}

.notes__content {
  display: flex;
  flex-direction: column;
  gap: px-to-rem(20px);
  width: 90%;
}

.notes__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: px-to-rem(10px);
  padding-top: 10px;
}

.notes-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid rgba($color-main, 0.3);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.31);

  &:last-child {
    margin-bottom: 10px;
  }

  &:first-child {
    margin-top: 10px;
  }
}

.notes-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 30px;

  @media screen and (min-width: $screen-md) {
    min-height: 70px;
  }
}

.notes-item__utilities {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    scale: 1.2;
  }
}

.notes-item__title {
  font-size: 20px;
  font-weight: 600;
  text-align: right;
  color: $color-text-main;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: $color-text-main;
  }
}

input {
  width: 80%;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 30px;

  @media screen and (min-width: $screen-md) {
    min-height: 70px;
  }
}
</style>
