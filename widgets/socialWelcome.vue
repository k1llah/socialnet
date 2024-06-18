<script setup lang="ts">

</script>
<template>
	<div class="flex justify-around items-center">
		<div class="flex justify-center items-center flex-col h-screen">
      <h1 class="hello dark:text-darkWhite text-2xl font-bold text-center">
        Welcome to socialnet nuxt!!
      </h1>
      <div class="mt-12 flex flex-col ">
        <div class="flex gap-2">
         <img class="w-5" src="/tg.svg" alt=""> <h4 class="dark:text-darkWhite">Socialnetbrand</h4>
        </div>
      </div>
    </div>		
    <mainForm/>
	</div>
</template>
<style scoped>
.hello {
  animation: hi 1.3s;
  @keyframes hi {
    0% {
      opacity: 0;
      width: 0%;
      transform: scale(0.4);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>