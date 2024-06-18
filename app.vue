<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
const dark = useDark()
const toggleDark = useToggle(dark)
</script>
<template>
  <div>
    <div class="container">
    <NuxtPage />
    
  </div>
  </div>
</template>
