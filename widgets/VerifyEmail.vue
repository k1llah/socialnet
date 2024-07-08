<script setup lang="ts">
	const auth = useAuth()
	const value = ref<string[]>([])
	const error = ref('')
	const handleComplete = (e: string[]) => {
		if (e.join('') == '12345') alert(e.join(''))
		else alert('Wrong code')
		setTimeout(() => {
			error.value = ''
		}, 3000)
		error.value = 'Wrong code'
	}

	watchEffect(() => {
		console.log(auth.timeoutSendAgain)
	})

	onBeforeMount(async () => {
		await auth.startCountDown()
	})
</script>
<template>
	<div class="w-full">
		<div class="mx-auto flex h-screen flex-col justify-center">
			<div class="text-center">
				<h1
					class="text-3xl font-extrabold dark:text-white"
					@click="auth.emailVerify()">
					Enter code from email
				</h1>
				<p class="pt-2 text-sm text-darkGray">
					be careful, your verify code can be in the spam folder, please check it
				</p>
			</div>
			<div class="mx-auto mt-10 w-fit">
				<div class="rounded-xl border-2 border-darkGrayDarken p-5">
					<ShadcnPinInput
						id="pin-input"
						v-model="value"
						placeholder="✖️"
						class="text-darkNightBlue"
						@complete="handleComplete">
						<ShadcnPinInputGroup class="sm:gap-1 md:gap-1">
							<template
								v-for="(id, index) in 5"
								:key="id">
								<ShadcnPinInputInput
									class="rounded-md border"
									:index="index" />
								<template v-if="index !== 4">
									<ShadcnPinInputSeparator class="text-greenJuice sm:hidden md:block" />
								</template>
							</template>
						</ShadcnPinInputGroup>
					</ShadcnPinInput>
				</div>
				<p class="p-3 text-sm text-redJuice">{{ error }}</p>
				<div class="flex w-full items-center justify-center">
					<TimeoutButton />
				</div>
			</div>
		</div>
	</div>
</template>
