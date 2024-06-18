<script setup lang="ts">
const formControls = useFormControls()
let pass = ref('')
const val = ref('')
// watch(pass, () => {
// 	console.log(pass.value)
// })
// watch(val, () => {
// 	console.log(val.value)
// })
</script>
<template>
	<div class="flex flex-col gap-5 items-center">
		<div class="flex justify-center items-center flex-col p-9 rounded-xl dark:bg-darkenGray border-darkGrayDarken border-[1px] min-w-[310px]">
			<div class="flex gap-3 flex-col items-center">
				<img src="/tg.svg" class="max-w-[60px]" alt="">
				<h2 class="text-xl">Sign in to Socialnet</h2>
			</div>
		<TheInput :label="' Email'" :name="'email'" :type="''" v-model="val" class="mt-7"/>
		<TheInput :label="'Password'" :name="'password'" :type="''" v-model="pass" class="mt-7"/>
		<ShadcnButton class="dark:text-darkWhite border-b-[2px] mt-5 rounded-none w-[50%]  hover:transition-all hover:duration-300 transition-all duration-500 hover:dark:text-greenJuice hover:border-greenJuice">Sign in</ShadcnButton>
	</div>
	<div class="flex justify-center flex-col items-center gap-3 rounded-xl p-5 dark:bg-darkenGray border-darkGrayDarken border-[1px] min-w-[310px]">
		<p class="text-center mt-2 text-sm">Don't have an account?</p>
		<ShadcnButton class="dark:text-darkGrayDarken px-2 py-1 bg-greenJuice  rounded-lg w-[40%]">Sign up</ShadcnButton>
	</div>
	</div>
</template>