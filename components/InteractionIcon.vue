<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipTAddOne0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke-linecap="round" d="M24 16v16m-8-8h16"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAddOne0)"></path></svg>
</template>

<script>
export default {
  name: 'InteractionIcon'
}
</script>

<style scoped>
svg {
  font-size: 2rem;
  transition: all .2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

svg:hover {
    cursor: pointer;
 }

</style>