<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: #a5c325;
  transition: 0.4s;
  padding: 3px;
}

@media (hover: hover) {
  a:hover {
    background-color: #a5c325;
    color: #383838;
  }
}
</style>
