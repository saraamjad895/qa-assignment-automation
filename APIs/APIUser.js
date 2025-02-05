const { log } = require("console");
const pageUrls = JSON.parse(JSON.stringify(require("../fixtures/pageUrls.json")));

export class APIUser {
    constructor(context) {
        this.context = context;
    }

    /**
     * To get response data for Get api
     * @returns JsonResposne object 
     */
    async getPosts() {
        const response = await this.context.get(pageUrls.ApiEndpoints.getApiUrl)
        let JsonResponse = await response.json();
        console.log(JsonResponse)
        return JsonResponse;
    }
} module.exports = { APIUser };