<template>
  <div class="max-w-lg p-6">
    <div
      class="border border-darkGrayDarken rounded-xl p-6 mb-4 space-x-6 flex justify-center overflow-hidden"
    >
      <div class="skeleton-modified" v-for="i in 5">
        <div class="avatar"></div>
        <div class="name"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.skeleton {
  background: linear-gradient(90deg, #2c2c2c 25%, #3b3b3b 50%, #2c2c2c 75%);
  background-size: 200% 100%;
  animation: pulse 1.7s infinite;
}

.skeleton-modified {
  @apply space-y-3 flex flex-col items-center;
}

.avatar {
  @apply rounded-full skeleton h-12 w-12;
}

.name {
  @apply rounded skeleton h-3 w-14;
}
</style>
