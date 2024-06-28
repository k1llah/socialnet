<script setup lang="ts">
	const props = defineProps({
		isPlaying: {
			type: Boolean,
			default: false,
		},
		showedControls: Boolean,
		author: String,
		songName: String,
	})
</script>

<template>
	<div
		v-if="props.showedControls"
		class="flex w-full ml-10 items-center">
		<div class="flex gap-4 items-center w-28">
			<img
				src="/controlMusic.svg"
				alt="previous" />
			<img
				v-if="!props.isPlaying"
				src="/play.svg"
				alt="play" />
			<img
				v-else-if="props.isPlaying == true"
				src="/pause.svg"
				alt="pause" />
			<img
				src="/controlMusic.svg"
				class="rotate-180"
				alt="next" />
		</div>
		<h4 class="text-nowrap">{{ props.author }} - {{ props.songName }}</h4>
	</div>
</template>

<style scoped>
	img {
		@apply max-w-5;
	}
	h4 {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
