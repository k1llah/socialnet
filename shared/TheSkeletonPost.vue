<template>
  <div class="max-w-lg p-6">
    <div class="border border-darkGrayDarken rounded-xl p-6 mb-4 space-y-5">
      <div class="flex space-x-5 items-center">
        <div class="rounded-full skeleton h-12 w-12"></div>
        <div class="space-y-2">
          <div class="skeleton h-4 w-52 rounded"></div>
          <div class="skeleton h-4 w-36 rounded"></div>
        </div>
      </div>
      <div class="space-y-2">
        <div class="skeleton h-4 rounded"></div>
        <div class="skeleton h-4 w-32 rounded"></div>
      </div>
      <div>
        <div class="skeleton h-40  rounded"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.skeleton {
  animation: pulse 1.5s infinite;
  background: #616161; 
}
</style>
