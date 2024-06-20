<script setup lang="ts">
import MusicControls from '~/features/MusicControls.vue'

const props = defineProps({
  searchInput: {
    Boolean,
    default: true,
  },
  notifications: {
    Boolean,
    default: true,
  },
  musicTab: {
    Boolean,
    default: true,
  },
  accountTab: {
    Boolean,
    default: true,
  },
	musicControls:{
		Boolean,
		default: true
	},
	isPlayingMusic: {
		Boolean,
		default: false
	},
});
</script>
<template>
  <div class="bg-darkGrayDarken bg-opacity-75 w-full p-3 fixed z-50">
    <div class="container">
      <div class="flex items-center">
        <img src="/tg.svg" class="max-w-9" alt="" />
        <h2 class="text-lg font-medium ml-2 pr-10">SocialNet</h2>
        <div class="flex gap-5 justify-between w-full">
					<div class="flex gap-5 w-full">
          <div v-if="props.searchInput == true" class="flex relative items-center">
            <img src="/search.svg" class="max-w-6 absolute pl-2" alt="" />
            <input
              type="search"
              class="bg-darkGrayDarken p-[6px] pl-[26px] text-sm font-light rounded-lg"
              placeholder=" Search"
            />
          </div>
          
            <img
						v-if="props.notifications"
              src="/notification.svg"
              class="max-w-6 cursor-pointer"
              alt=""
            />
            <img v-if="props.musicTab" src="/music.svg" class="max-w-8 cursor-pointer" alt="" />
						<MusicControls :isPlaying="props.musicControls"/>
          </div>
					
				
          <div v-if="props.accountTab" class="flex items-center gap-2 float-right relative  cursor-pointer">
            <img
              src="/IMG_6400 copy.JPG"
              class="max-w-9 rounded-[50%]"
              alt=""
            />
            <img src="/down.svg" class="max-w-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
