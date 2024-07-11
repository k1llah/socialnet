<script setup lang="ts">
	const auth = useAuth()
	const buttonContent = ref('Send again')

	const EXPIRES_IN_MS = 0.1 * 60 * 1000

	const timerExpiresDate = ref(0)
	const timerIntervalId = ref<ReturnType<typeof setInterval> | undefined>(undefined)
	const timer = ref('')

	const resetTimer = () => {
		clearInterval(timerIntervalId.value)

		const date = Date.now()

		timerExpiresDate.value = new Date(date + EXPIRES_IN_MS).getTime()

		timerIntervalId.value = setInterval(() => {
			const diff = Math.floor((timerExpiresDate.value - Date.now()) / 1000)

			if (diff < 0) {
				clearInterval(timerIntervalId.value)

				return
			}

			const minutes = Math.round(diff / 60)
			const seconds = Math.round(diff % 60)

			timer.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
			console.log(timer.value)
		}, 1000)
	}
	if (timer.value && timer.value !== '00:00') {
		buttonContent.value = `Wait ${timer.value} seconds to send code again`
	} else {
		buttonContent.value = 'Send again'
	}
	onMounted(() => resetTimer())
</script>
<template>
	<div>
		<ShadcnButton
			class="m-auto w-fit bg-darkWhite text-mainDark"
			:disabled="auth.timeoutSendAgain && auth.timeoutSendAgain > 0"
			@click="resetTimer()">
			{{ buttonContent }}
		</ShadcnButton>
	</div>
</template>
