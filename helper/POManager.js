const { loginPage } = require('../pages/loginPage.spec');
const { securePage } = require('../pages/securePage.spec');
class POManager {
    /**
     * initialize the page objects
     * @param {page} page 
     */
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage(this.page);
        this.securePage = new securePage(this.page);
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
} module.exports = { POManager };