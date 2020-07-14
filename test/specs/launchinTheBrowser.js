describe('laucnhing the browser', () => {
	it('lets launch the browser',()=> {
		//browser.url('https://www.google.com/')
		//browser.pause(3000)
		//expect(browser).toHaveUrl('https://www.google.com/')
		//expect(browser).toHaveTitle('Google')
		//browser.takeScreenshot)

	})

	it('e2e launching of test website', () => {
		browser.url('http://zero.webappsecurity.com/ ')
		browser.pause(3000)
		//declaring the elements
		const sininButton = $('#signin_button')
		const login = $('#user_login')
		const userpass = $('#user_password')
		const submit = $('input[type="submit"]')

		sininButton.waitForExist()
		sininButton.click()

		login.waitForExist()
		login.setValue('invalid')
		userpass.setValue('invalid')

		submit.click()


		

	})
})