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
