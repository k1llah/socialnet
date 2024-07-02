<script lang="ts" setup>
	const value = ref('')
</script>
<template>
	<div class="flex h-screen items-center justify-center">
		<div class="flex rounded-xl bg-darkenGray p-3 sm:flex-col md:flex-row">
			<div
				class="flex max-w-[360px] flex-col items-center justify-center gap-2 rounded-xl bg-darkGrayDarken/40 px-10 sm:hidden md:flex">
				<div class="my-10 flex max-w-[310px] flex-col items-center gap-3">
					<div class="max-w-fit rounded-lg bg-white">
						<img
							src="/qr.svg"
							class="w-[200px]"
							alt="" />
					</div>
					<h3 class="text-xl">Fast sign up by qr</h3>
					<span class="text-base text-darkGray/70">
						Scan your qr code with your phone camera to log in
					</span>
					<ShadcnButton>Details</ShadcnButton>
				</div>
			</div>
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
					<vue-tel-input
						v-model="value"
						:required="true"
						:input-options="{
							placeholder: 'enter',
						}"
						:preferred-countries="['ru']"
						class=""
						:valid-characters-only="true"></vue-tel-input>
				</div>

				<ShadcnButton class="w-full bg-darkWhite text-mainDark">Continue</ShadcnButton>
				<div class="mt-20">
					<p class="text-xs text-darkGray">
						By clicking "Continue", you accept the user agreement and privacy policy
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
