import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
export default defineNuxtPlugin(async (nuxtApp) => {
	nuxtApp.vueApp.use((app) => {
		app.use(VueTelInput as never)
	})
})
