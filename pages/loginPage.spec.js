import { locators } from "../helper/locators.js";
class loginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator(locators.userNameFieldLocator);
        this.password = page.locator(locators.passwordFieldLocator);
        this.loginBtn = page.locator(locators.loginButtonLocator);
    }

    /**
     * Func to open the link on browser
     * @param {webLink} url 
     */
    async openApp(url) {
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
    }

    /**
     * Func to enter user name and password to login
     * @param {userName} uname 
     * @param {password} pwd 
     */
    async loginToApplication(uname, pwd) {
        await this.userName.fill(uname);
        await this.password.fill(pwd);
        await this.loginBtn.click();
        await this.page.waitForLoadState('networkidle')
    }
} module.exports = { loginPage }