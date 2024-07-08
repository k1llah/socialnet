<script lang="ts" setup>
	const auth = useAuth()
	const emailVal = ref('')
	auth.email = emailVal.value
	const error = auth.emailError

	async function handleRegister() {
		try {
			const data = await $fetch<{ expires: string }>(' http://localhost:3001/api/register', {
				method: 'POST',
				body: {
					email: auth.email,
				},
			})

			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}
</script>
<template>
	<div class="flex max-w-[300px] flex-col items-center gap-5 p-5 text-center">
		<img
			src="/tg.svg"
			class="max-w-12"
			alt="" />
		<h3 class="text-xl font-bold">Enter Number</h3>
		<span class="text-base text-darkGray/60">
			Your phone number will be used for account login
		</span>

		<div class="max-w-[310px]">
			<TheInput
				v-model="auth.email"
				:label="'Email'"
				:name="'email'"
				:error-message="error"></TheInput>
		</div>

		<ShadcnButton
			class="w-full bg-darkWhite text-mainDark"
			:class="{ 'disabled opacity-50 ': !auth.email }"
			:disabled="auth.email.length === 0"
			@click="auth.emailVerify(), handleRegister()">
			Continue
		</ShadcnButton>
		<div>
			<p class="text-xs text-darkGray">
				By clicking "Continue", you accept the user agreement and privacy policy
			</p>
		</div>
	</div>
</template>

<style></style>
