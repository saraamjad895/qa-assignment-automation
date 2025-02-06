const { loginPage } = require('../pages/loginPage');
const { securePage } = require('../pages/securePage');
const { commonLib } = require('../Utils/commonLib');
const { dynamicLoadingPage } = require('../pages/dynamicLoadingPage');
const { fileUploadPage } = require('../pages/fileUploadPage');
class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage(this.page);
        this.securePage = new securePage(this.page);
        this.commonLibs = new commonLib(this.page);
        this.dynamicLoadingPage = new dynamicLoadingPage(this.page);
        this.fileUploadPage = new fileUploadPage(this.page);
    }

    /**
     * To get Login page object 
     * @returns  
     */
    getLoginPage() {
        return this.loginPage;
    }

    /**
     * To get Secure page object 
     * @returns 
     */
    getSecurePage() {
        return this.securePage;
    }

    /**
     * To get Common library object 
     * @returns 
     */
    getCommonLib() {
        return this.commonLibs;
    }

    /**
     * To get Dynamic loading object 
     * @returns 
     */
    getDynamicLoadingPage() {
        return this.dynamicLoadingPage;
    }

    /**
     * To get file upload object 
     * @returns 
     */
    getFileUploadPage() {
        return this.fileUploadPage;
    }
} module.exports = { POManager };