<template>
  <div class="btn" @click="emit('action')">
    <InteractionIcon 
      class="btn-icon" 
      :class="determineIconClass"
    />
    <h2 v-if="btnText">{{ btnText }}</h2>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, computed } from 'vue'
import InteractionIcon from './InteractionIcon.vue'

const emit = defineEmits(['action'])
const props = defineProps({
  btnText: {
    type: String,
    default: '',
  },
  btnClass: {
    type: String,
    default: 'add',
  }
})

const determineIconClass = computed(() => {
  switch (props.btnClass) {
    case 'add':
      return 'btn-icon--add'
    case 'delete':
      return 'btn-icon--delete'
    default:
      return ''
  }
})
</script>

<style scoped lang="scss">
@use 'sass:color';

.btn {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 15px;
  cursor: pointer;
  font-size: 2rem;
  transition: all .2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  h2 {
    font-size: 1.5rem;
  }

  &-icon {
    transition: transform 0.2s ease-in-out;

    &--delete {
      transform: rotate(45deg);

      &:hover {
        color: $color-danger;
        transform: rotate(135deg);
      }
    }

    &--add {
      color: $color-text-main;

      &:hover {
        color: $color-success;
        transform: rotate(90deg);
      }
    }
  }
}
</style>