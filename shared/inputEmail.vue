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
      <input
        type="email"
        class="outline-none p-2 rounded-sm text-darkGray dark:bg-darkGrayDarken"
        placeholder="Enter Email"
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
</style>
