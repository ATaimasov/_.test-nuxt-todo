<template>
    <div>
        <InteractionIcon class="remove-icon" @click="$emit('remove')"></InteractionIcon>
    </div>
</template>

<script setup>

const emit = defineEmits(['remove'])


</script>

<style  scoped>
.remove-icon {
    transform: rotate(45deg);
}

.remove-icon:hover {
    transform: rotate(135deg);
 }




</style>