<script setup lang="ts">
	const props = defineProps({
		errorMessage: String,
		label: String,
		name: String,
		type: String,
	})
	const modelInput = defineModel({
		type: String,
		// required: true,
		default: '',
	})
	// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
</script>
<template>
	<div>
		<div class="relative flex flex-col">
			<label
				:for="props.name"
				:class="['label-user', { 'label-user-active': modelInput !== '' }]"
				class="text-darkGray dark:text-darkWhite">
				{{ props.label }}
			</label>
			<input
				v-model="modelInput"
				:type="props.type"
				class="rounded-[4px] p-2 text-darkGray outline-none dark:bg-darkGrayDarken" />
			<span class="transition-width bottom-0 left-0 h-[2px] w-0 underline duration-300"></span>
			<p
				v-if="props.errorMessage !== ''"
				v-auto-animate
				class="pt-[1px] text-start text-xs text-redJuice">
				{{ errorMessage }}
			</p>
		</div>
	</div>
</template>
<style scoped>
	span {
		background: linear-gradient(90deg, #ff6464 0%, #ffbf59 50%, #47c9ff 100%);
	}
	input:focus + span {
		width: 100%;
		outline: none;
	}
	.label-user {
		position: absolute;
		left: 10px;
		transform: translateY(0.5rem);
		transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
		color: #e8e8e8;
		pointer-events: none;
	}
	.label-user-active,
	.input:focus .label-user {
		left: 0px;
		margin-top: -1.9rem;
		padding: 0.2em;
		padding-left: 0em;
		color: #2196f3;
		font-size: 12px;
	}
</style>
