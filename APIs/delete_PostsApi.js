const { log } = require("console");
import { expect } from '@playwright/test';

export class deletePostsApi {
    constructor(context) {
        this.context = context;
    }

    /**
     * Func to call delete method api
     * @param {String, JSON} endpoint , postData
     * @returns {Response} response 
     */
    async deleteApiPosts(endpoint) {
        const response = await this.context.delete(endpoint)
        return response;
    }

    /**
     * Func to verify the delete success status code
     * @param {Response} response 
     */
    async verifyDeleteStatusCode(response) {
        await expect(response.status()).toBeOneOf([200, 204]);
    }

    /**
     * Func to verify the deleted post id not available
     * @param {String} endpoint 
     */
    async verifyDeletePostId(endpoint) {
        const response = await this.context.get(endpoint)
        let post = await response.json();
        await expect(response.status()).toBe(404);
    }
} module.exports = { deletePostsApi };