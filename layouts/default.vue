<template>
  <Teleport to="body">
    <header id="header" class="header header--grid">
      <TheHeader/>
    </header>
  </Teleport>
  <Teleport to="body">
    <main id="main" class="main main--grid">
      <slot/>
    </main>
  </Teleport>
  <Teleport to="body">
    <footer id="footer" class="footer footer--grid">
      <TheFooter/>
    </footer>
  </Teleport>
</template>

<script lang="ts" setup>

</script>

<style>

</style>