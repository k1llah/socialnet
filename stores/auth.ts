import { defineStore } from 'pinia'
export const useAuth = defineStore('auth', {
	state: () => ({
		//verify email part
		email: '',
		isEmailCorrect: false,
		verificationInputVisible: false,
		verifyCode: '',
		emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		emailError: '',
		timeoutSendAgain: null as number | null,
		//sign in and sign up part
		password: '',
		isPasswordCorrect: false,
		confirmPassword: '',
		isRegister: null as boolean | null,
	}),
	actions: {
		// Verify email function
		async handleRegister() {
			try {
				this.isEmailCorrect = this.emailRegex.test(this.email)
				if (this.email.length < 2 && this.isEmailCorrect === false)
					this.emailError = 'Email is not valid'

				const response = await $fetch<{
					expires: string
					isRegistered: boolean
				}>(' http://localhost:3001/api/register', {
					method: 'POST',
					body: {
						email: this.email,
					},
				})
				this.isRegister = response.isRegistered
				console.log('auth pen', response, 'var', this.isRegister)
			} catch (error) {
				console.log(error)
			}
		},
		// Count down function
		async startCountDown() {
			const interval = setInterval(() => {
				if (this.timeoutSendAgain && this.timeoutSendAgain > 0) {
					this.timeoutSendAgain--
				} else {
					clearInterval(interval)
				}
			}, 1000)
		},
		async signUp() {},
	},
})
