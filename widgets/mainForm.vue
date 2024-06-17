<script setup lang="ts">
const formControls = useFormControls()
const value = computed(() => formControls.emailVal);
</script>
<template>
	<div>
		<div class="flex justify-center items-center flex-col p-7 rounded-xl dark:bg-darkenGray border-darkGrayDarken border-[1px]">
			<div class="flex gap-2 flex-col items-center">
				<img src="/tg.svg" class="max-w-[60px]" alt="">
				<h2 class="text-xl">Sign in to Socialnet</h2>
			</div>
		<InputEmail />
	</div>
	</div>
</template>