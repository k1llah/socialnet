<script setup lang="ts">
const inputVal = ref('')
const props = defineProps({
	errorMessage: String
})
const formControls = useFormControls()
watch(inputVal, ()=>{
	formControls.emailVal = inputVal.value
 console.log(inputVal.value)

})
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
</script>
<template>
	<div>
		<div class="flex flex-col gap-3">
			<label for="">Email</label>
			<input type="text" v-model="inputVal" placeholder="Email">
			<p class="text-red-500" v-if="errorMessage !== ''">{{ errorMessage }}</p>
		</div>
	</div>
</template>