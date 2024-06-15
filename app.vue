<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
const dark = useDark()
const toggleDark = useToggle(dark)
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
