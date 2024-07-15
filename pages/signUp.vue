<script lang="ts" setup>
	definePageMeta({
		pageTransition: {
			name: 'slide',
		},
	})
</script>
<template>
	<div>
		<SignUpWidget />
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
