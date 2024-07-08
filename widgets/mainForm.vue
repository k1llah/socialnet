<script setup lang="ts">
	// const formControls = useFormControls()
	const pass = ref('')
	const val = ref('')
	// watch(pass, () => {
	// 	console.log(pass.value)
	// })
	// watch(val, () => {
	// 	console.log(val.value)
	// })
</script>
<template>
	<div class="flex flex-col items-center gap-5">
		<div
			class="flex min-w-[310px] flex-col items-center justify-center rounded-xl border border-darkGrayDarken p-9 dark:bg-darkenGray">
			<div class="flex flex-col items-center gap-3">
				<img
					src="/tg.svg"
					class="max-w-[60px]"
					alt="" />
				<h2 class="text-xl">Sign in to Socialnet</h2>
			</div>
			<TheInput
				v-model="val"
				:label="' Email'"
				:name="'email'"
				:type="''"
				class="mt-7" />
			<TheInput
				v-model="pass"
				:label="'Password'"
				:name="'password'"
				:type="''"
				class="mt-7" />
			<ShadcnButton
				class="mt-5 w-[50%] rounded-none border-b-2 transition-all duration-500 hover:border-greenJuice hover:transition-all hover:duration-300 dark:text-darkWhite hover:dark:text-greenJuice">
				Sign in
			</ShadcnButton>
		</div>
		<div
			class="flex min-w-[310px] flex-col items-center justify-center gap-3 rounded-xl border border-darkGrayDarken p-5 dark:bg-darkenGray">
			<p class="mt-2 cursor-pointer text-center text-sm transition hover:text-darkGray">
				Don't have an account?
			</p>

			<ShadcnButton
				class="hover:bg-opacity/80 w-2/5 rounded-lg bg-greenJuice px-2 py-1 dark:text-darkGrayDarken">
				<NuxtLink to="/signUp"> Sign up </NuxtLink>
			</ShadcnButton>
		</div>
	</div>
</template>
<style></style>
