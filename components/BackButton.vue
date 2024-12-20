<template>
  <div class="back-button">
    <NuxtLink to="/" class="link">
      <BackIcon class="add-icon"></BackIcon>
      <h2 v-if="btnText !== ''">{{ btnText }}</h2>
    </NuxtLink>
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

<style lang="scss" scoped>
.back-button {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 15px;
}

.link {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 15px;
  color: $color-text-main;
}


</style>