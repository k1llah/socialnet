import { defineStore } from "pinia";
export const useFormControls = defineStore("blog", {
  state: () => ({
    emailVal: '',
		passwordVal: '',
		confirmPasswordVal: '',

  }),
  actions: {

	},
});
