<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
import AppHeader from './widgets/AppHeader.vue'
const dark = useDark()
const toggleDark = useToggle(dark)
</script>
<template>
  <div>
    <AppHeader :musicControls="true" :musicTab="false" :searchInput="false" :notifications="false" :accountTab="false"/>
    <div class="container">
    <NuxtPage />
    
  </div>
  </div>
</template>
