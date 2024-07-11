export default defineNuxtRouteMiddleware(() => {
	const auth = useAuth()
	if (!auth.isEmailCorrect && auth.isRegister) return navigateTo('/login')
	navigateTo('/test2')
})
