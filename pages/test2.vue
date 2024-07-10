<script lang="ts" setup>
	definePageMeta({
		pageTransition: {
			name: 'slide-reverse',
		},
	})
</script>
<template>
	<div>
		<VerifyEmail />
	</div>
</template>
<style>
	.slide-reverse-enter-active,
	.slide-reverse-leave-active {
		transition: all 0.8s;
	}

	.slide-reverse-enter,
	.slide-reverse-leave-to {
		transform: translateX(100%);
		opacity: 0;
		filter: blur(1rem);
	}
</style>
