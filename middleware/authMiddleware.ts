export default defineNuxtRouteMiddleware(async () => {
	const auth = useAuth()
	if (auth.isRegister === null) return navigateTo('/')
	if (auth.isRegister === false) return navigateTo('/test2')
})
