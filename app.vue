<script setup lang="ts">
	import AppHeader from './widgets/AppHeader.vue'
</script>
<template>
	<div>
		<AppHeader
			:music-controls="false"
			:music-tab="false"
			:search-input="false"
			:notifications="false"
			:is-playing-music="false"
			:account-tab="false" />
		<div class="container">
			<NuxtPage />
		</div>
	</div>
</template>
<style>
	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.8s;
	}

	.slide-enter,
	.slide-leave-to {
		transform: translateX(-100%);
		opacity: 0;
		filter: blur(1rem);
	}
</style>
