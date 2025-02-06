import { locators } from "../helper/locators.js";

class fileUploadPage {
    constructor(page) {
        this.page = page;
        this.chooseFileBtn = page.locator(locators.chooseFileButtonLocator);
        this.uploadFileBtn = page.locator(locators.uploadFileButtonLocator);
        this.uploadFileSuccessMsg = page.locator(locators.uploadFileSuccessMsgLocator, { hasText: 'File Uploaded!' });
    }

    /**
     * Func to click on choose button and select file
     * @param {String} filePath 
     */
    async clickChooseFileBtn(filePath) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.chooseFileBtn.click()
        this.chooseFileBtn = await fileChooserPromise;
        await this.chooseFileBtn.setFiles(filePath);
    }

    /**
     * Func to click on upload button
     */
    async clickUploadBtn() {
        await this.uploadFileBtn.click()
    }

    /**
     * Func to get file upload success message
     * @returns string
     */
    async getSuccessFileUploadMsg() {
        const text = await this.uploadFileSuccessMsg.textContent();
        return text;
    }
} module.exports = { fileUploadPage }