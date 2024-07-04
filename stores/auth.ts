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
		//sign in and sign up part
		password: '',
		isPasswordCorrect: false,
		confirmPassword: '',
	}),
	actions: {
		async emailVerify() {
			this.isEmailCorrect = this.emailRegex.test(this.email)
			console.log(this.email)
			console.log(this.isEmailCorrect)
			if (this.email.length > 2 && this.isEmailCorrect === true) {
				const response = await $fetch('http://localhost:3001/api/auth/verify', {
					method: 'POST',
					body: {
						email: this.email,
					},
				})
				console.log(response)
			} else {
				this.isEmailCorrect = false
				this.emailError = 'Email is not valid'
			}
		},
		async signUp() {},
	},
})
