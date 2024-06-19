<template>
  <div class="max-w-lg p-6">
    <div
      class="border border-darkGrayDarken rounded-xl p-6 mb-4 space-x-6 flex justify-center overflow-hidden"
    >
      <div class="skeleton_div" v-for="i in 5">
        <div class="avatar"></div>
        <div class="name"></div>
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

.skeleton_div {
  @apply space-y-3 flex flex-col items-center;
}

.avatar {
  @apply rounded-full skeleton h-12 w-12;
}

.name {
  @apply rounded skeleton h-3 w-14;
}
</style>
