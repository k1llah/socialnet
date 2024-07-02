<script setup lang="ts"></script>
<template>
	<div class="flex flex-col justify-center sm:h-auto md:h-screen">
		<div
			class="flex items-center gap-5 sm:mt-5 sm:flex-col-reverse sm:justify-center md:mt-[unset] md:flex-row md:justify-around">
			<div class="flex flex-col items-center justify-center">
				<div
					class="typing-effect border-opacity/65 bg-opacity/85 mb-10 w-[300px] rounded-md border-l-[3px] border-redJuice bg-darkPurple p-3">
					<span
						class="letter"
						style="animation-delay: 100ms">
						W
					</span>
					<span
						class="letter"
						style="animation-delay: 200ms">
						e
					</span>
					<span
						class="letter"
						style="animation-delay: 300ms">
						l
					</span>
					<span
						class="letter"
						style="animation-delay: 400ms">
						c
					</span>
					<span
						class="letter"
						style="animation-delay: 500ms">
						o
					</span>
					<span
						class="letter"
						style="animation-delay: 600ms">
						m
					</span>
					<span
						class="letter"
						style="animation-delay: 700ms">
						e
					</span>

					<span
						class="letter"
						style="animation-delay: 800ms">
						! ⭐️
					</span>
				</div>

				<div
					class="border-opacity/65 bg-opacity/85 relative max-w-[300px] rounded-md border-l-[3px] border-redJuice bg-darkPurple p-3">
					<img
						class="absolute right-4 top-8 w-4"
						src="/commas.svg"
						alt="" />
					<p class="text-sm text-darkWhite">
						<span class="block pb-2 text-redJuice">
							We're thrilled to have you join our community! >3
						</span>
						This is a place where you can connect, share, and engage with friends, family, and
						like-minded individuals from around the world.
					</p>
					<ul class="list-disc box-decoration-slice pl-[25px] text-xs">
						<li>
							Find Friends: Use our search feature to connect with people you know or join groups
							that match your interests.
						</li>
						<li>
							Share Your Story: Post updates, photos, and videos to share what's happening in your
							life.
						</li>
					</ul>
					<p class="pt-3 text-center text-sm">Happy networking!</p>
				</div>
				<div class="mt-12 flex flex-col">
					<div class="flex gap-2">
						<img
							class="w-5"
							src="/tg.svg"
							alt="" />
						<h4 class="dark:text-darkWhite">Socialnetbrand</h4>
					</div>
				</div>
			</div>
			<MainForm />
			<ClientOnly fallback="Loading... ">
				<vue-tel-input class=""></vue-tel-input>
			</ClientOnly>
		</div>
		<TheFooter class="mt-16" />
	</div>
</template>
<style scoped>
	.typing-effect {
		display: flex;
	}
	.letter {
		display: inline-block;
		animation: typing 1.2s forwards;
		opacity: 0;
		font-size: 18px;
	}
	@keyframes typing {
		to {
			opacity: 1;
		}
	}
</style>
