import { expect } from '@playwright/test';
class commonLib {
    constructor(page) {
        this.page = page;
    }

    /**
     * Func to open the website link
     * @param {link} url 
     */
    async openApp(url) {
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
    }

    /**
     * Func to get text of element
     */
    async getText(locator) {
        const text = await locator.textContent();
        return text?.trim() || '';
    }

    /**
     * Func to wait for element to be visible
     */
    async waitForElementToBeVisible(locator) {
        await locator.waitFor({ state: 'visible' })
        await expect(locator).toBeVisible()
    }
} module.exports = { commonLib }

