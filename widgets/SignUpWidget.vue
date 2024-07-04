<script lang="ts" setup></script>
<template>
	<div class="flex h-screen items-center justify-center">
		<div class="flex rounded-xl bg-darkenGray p-3 sm:flex-col md:flex-row">
			<div
				class="flex max-w-[360px] flex-col items-center justify-center gap-2 rounded-xl bg-darkGrayDarken/40 px-10 sm:hidden md:flex">
				<div class="my-10 flex max-w-[310px] flex-col items-center gap-3 text-center">
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
			<SignUpFeature />
		</div>
	</div>
</template>
