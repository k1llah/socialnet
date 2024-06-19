<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
import AppHeader from './widgets/AppHeader.vue'
const dark = useDark()
const toggleDark = useToggle(dark)
</script>
<template>
  <div>
    <AppHeader/>
    <div class="container">
    <NuxtPage />
    
  </div>
  </div>
</template>
