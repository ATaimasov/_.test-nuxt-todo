<template>
  <div class="add-todo__container">
    <InteractionIcon class="add-icon" @click="$emit('add')"></InteractionIcon>
    <h2>{{ btnText }}</h2>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['add'])
const props = defineProps({
    btnText: {
        type: String,
        default: 'Добавить'
    }
})


</script>

<style scoped>
.add-todo__container {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 15px;
}

.add-icon:hover {
  transform: rotate(90deg);
}
</style>