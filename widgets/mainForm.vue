<script setup lang="ts">
const formControls = useFormControls()
const value = computed(() => formControls.emailVal);
</script>
<template>
	<div>
		<InputEmail />
		<ShadcnButton @click="console.log( value)" class="bg-darkWhite" >click</ShadcnButton>
	</div>
</template>