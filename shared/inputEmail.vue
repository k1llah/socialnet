<script setup lang="ts">
const inputVal = ref("");
const props = defineProps({
  errorMessage: String,
});
const formControls = useFormControls();
watch(inputVal, () => {
  formControls.emailVal = inputVal.value;
  console.log(inputVal.value);
});
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
</script>
<template>
  <div>
    <div class="flex flex-col relative">
      <label for="email" :class="['label-user', { 'label-user-active': inputVal !== '' }]" class="text-darkGray dark:text-darkWhite">Email</label>
      <input
        type="email"
        class="outline-none p-2 rounded-[4px] text-darkGray dark:bg-darkGrayDarken"
        v-model="inputVal"
      />
      <span
        class=" underline absolute bottom-0 h-[2px] left-0 w-0 transition-width duration-300"
      ></span>
      <p class="text-red-500" v-if="props.errorMessage !== ''">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
<style scoped>
input:focus + span {
  width: 100%;
  outline: none;
}
span {
	background: linear-gradient(90deg, #ff6464 0%, #ffbf59 50%, #47c9ff 100%);
}
.label-user {
	position: absolute;
	left: 10px;
	color: #e8e8e8;
	pointer-events: none;
	transform: translateY(0.50rem);
	transition: 150ms cubic-bezier(0.4,0,0.2,1);
}
.label-user-active, .input:focus ~ .label-user {
  transform: translateY(-1.6rem) scale(0.7);
  left: 0;
  padding: 0.2em;
  color: #2196f3;
}
</style>
