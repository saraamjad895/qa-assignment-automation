import { locators } from "../helper/locators.js";

class loginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator(locators.userNameFieldLocator);
        this.password = page.locator(locators.passwordFieldLocator);
        this.loginBtn = page.locator(locators.loginButtonLocator);
        this.loginInvalidUserErrorBox = page.locator(locators.loginInvalidUserErrorTextLocator);
    }

    /**
     * Func to enter user name and password to login
     * @param {userName} uname 
     * @param {password} pwd 
     */
    async loginToApplication(uname, pwd) {
        await this.userName.fill(uname)
        await this.password.fill(pwd)
        await this.loginBtn.click()
        await this.page.waitForLoadState('networkidle')
    }

    /**
     * Func to get error message for invalid user name and password
     * @returns string
     */
    async getErrorMessage() {
        const text = await this.loginInvalidUserErrorBox.textContent();
        return text?.trim() || '';
    }
} module.exports = { loginPage }