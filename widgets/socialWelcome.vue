<script setup lang="ts"></script>
<template>
  <div class="md:h-screen sm:h-auto flex flex-col justify-center ">
  <div class="flex md:justify-around items-center gap-5 sm:flex-col-reverse md:flex-row sm:justify-center  md:mt-[unset] sm:mt-5">
     <div class="flex justify-center items-center flex-col">
      <div class="bg-darkPurple bg-opacity-85 p-3 mb-10 border-l-[3px] border-redJuice rounded-md border-opacity-65 w-[300px] typing-effect">
        <span class="letter" style="animation-delay:100ms">W</span>
        <span class="letter" style="animation-delay:200ms">e</span>
        <span class="letter" style="animation-delay:300ms">l</span>
        <span class="letter" style="animation-delay:400ms">c</span>
        <span class="letter" style="animation-delay:500ms">o</span>
        <span class="letter" style="animation-delay:600ms">m</span>
        <span class="letter" style="animation-delay:700ms">e </span>
        
        <span class="letter" style="animation-delay:800ms">! ⭐️</span>
      </div> 
   
      <div
        class="bg-darkPurple bg-opacity-85 p-3 border-l-[3px] border-redJuice rounded-md border-opacity-65 max-w-[300px] relative"
      >
        <img class="w-4 absolute right-4  top-8" src="/commas.svg" alt="" />
        <p class="text-darkWhite text-sm ">
         <span class="text-redJuice block pb-2"> We're thrilled to have you join our community! < 3 </span>
         This is a place where 
          you can connect, share, and engage with friends, family, and
          like-minded individuals from around the world. 
          
        </p>
        <ul class="decoration-slice list-disc pl-[25px] text-xs">
          <li>
            Find Friends: Use our
          search feature to connect with people you know or join groups that
          match your interests.  
          </li>
          <li>Share Your Story: Post updates, photos, and
            videos to share what's happening in your life.</li>
        </ul>
        <p class="text-sm pt-3 text-center">Happy networking!</p>
      </div>
      <div class="mt-12 flex flex-col">
        <div class="flex gap-2">
          <img class="w-5" src="/tg.svg" alt="" />
          <h4 class="dark:text-darkWhite">Socialnetbrand</h4>
        </div>
      </div>
    </div>
    <MainForm/>
  </div>
  <TheFooter class="mt-16"/>
</div>
</template>
<style scoped>
.typing-effect {
  display: flex;
}
.letter {
  display: inline-block;
  opacity: 0;
  animation: typing 1.2s forwards;
  font-size: 18px;
}
@keyframes typing {
  to {
    opacity: 1;
  }
}
</style>
