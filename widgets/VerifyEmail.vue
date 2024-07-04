<script setup lang="ts">
	const value = ref()
	const handleComplete = () => {}
</script>
<template>
	<div class="h-screen">
		<ShadcnPinInput
			id="pin-input"
			v-model="value"
			placeholder="○"
			@complete="handleComplete">
			<ShadcnPinInputGroup class="gap-1">
				<template
					v-for="(id, index) in 5"
					:key="id">
					<ShadcnPinInputInput
						class="rounded-md border"
						:index="index" />
					<template v-if="index !== 4">
						<ShadcnPinInputSeparator />
					</template>
				</template>
			</ShadcnPinInputGroup>
		</ShadcnPinInput>
	</div>
</template>
