<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Layout from './components/Layout.vue'

</script>

<template>
  <Layout/>
</template>

<style scoped>

.menu-item {
  transition: all 0.3s ease-in-out;
  width: 100%;
  overflow: hidden;
}
p.collapsed {
  width: 0;
  
}

</style>
