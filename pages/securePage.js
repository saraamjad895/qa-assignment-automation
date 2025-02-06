class securePage {
    constructor(page) {
        this.page = page;
    }

    /**
     * To get current page url
     * @returns
     */
    async getCurrentUrl() {
        return await this.page.url();
    }
} module.exports = { securePage }