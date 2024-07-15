export default defineNuxtRouteMiddleware(async (to) => {
	const auth = useAuth()
	if (auth.isRegister === null && to.path !== '/') return navigateTo('/')
	else return navigateTo('/test2')
})
