<script setup lang="ts"></script>
<template>
  <div class="flex md:justify-between text-sm md:flex-row sm:flex-col sm:justify-center sm:items-center sm:gap-5 p-1">
		<div class="flex gap-3">
			<a href="#" class="text-greenJuice">SocialNet </a>
			<p>© 2024</p>
		</div>
		<div class="flex md:gap-5 sm:gap-2 md:text-sm sm:text-xs ">
			<NuxtLink to="#" class="links">About SocialNet</NuxtLink>
			<NuxtLink to="#" class="links">Rules</NuxtLink>
			<NuxtLink to="#" class="links">Report a problem</NuxtLink>
		</div>
		<div class="flex gap-5">
			<NuxtLink to="#">FAQ</NuxtLink>
			<NuxtLink to="#">Contact us</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
.links{
	@apply border-b-[1px] border-darkGrayDarken p-[1px]
}
</style>
