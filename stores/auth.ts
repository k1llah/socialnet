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
	}),
	actions: {
		// Verify email function
		async emailVerify() {
			try {
				this.isEmailCorrect = this.emailRegex.test(this.email)
				console.log(this.email)
				console.log(this.isEmailCorrect)
				// if (this.email.length > 2 && this.isEmailCorrect === true) {
				const response = await $fetch('http://localhost:3001/api/verify-email', {
					method: 'GET',
				})
				// this.startCountDown()
				console.log(response)
				// } else {
				// 	this.startCountDown()
				// 	this.isEmailCorrect = false
				// 	this.emailError = 'Email is not valid'
				// }
			} catch (err) {
				console.log(err)
			}
		},
		// Count down function
		async startCountDown() {
			const timeoutRes = await $fetch<{ timeoutSendAgain: number }>(
				'http://localhost:3001/api/timeout-response',
				{
					method: 'GET',
				},
			)
			this.timeoutSendAgain = timeoutRes.timeoutSendAgain
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
