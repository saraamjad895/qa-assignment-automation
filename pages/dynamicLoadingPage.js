import { locators } from "../helper/locators.js";
import { expect } from '@playwright/test';

class dynamicLoadingPage {
    constructor(page) {
        this.page = page;
        this.startBtn = page.locator(locators.startButtonLocator);
        this.helloWorldMessage = page.locator(locators.helloWorldLocator);
    }

    /**
     * Func to start dynamic loading
     */
    async startDynamicLoading() {
        await this.startBtn.click()
    }

    /**
     * Func to get text message on last screen
     * @returns string
     */
    async getFinalTextAfterLoading() {
        const text = await this.helloWorldMessage.textContent();
        return text;
    }

    /**
     * Func to wait fro dynamic loading
     */
    async waitForDynamicLoading() {
        await this.helloWorldMessage.waitFor({ state: 'visible' })
        await this.page.waitForLoadState('networkidle')
        await expect(this.helloWorldMessage).toBeVisible()
    }
} module.exports = { dynamicLoadingPage }