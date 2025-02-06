const { log } = require("console");
import { expect } from '@playwright/test';

export class putPostsApi {
    constructor(context) {
        this.context = context;
    }

    /**
     * Func to call put api to update content
     * @param {String, JSON} endpoint, postData
     * @returns
     */
    async putApiPosts(endpoint, postData) {
        const response = await this.context.put(endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: postData
        });
        return response
    }

    /**
     * Func to verify the update post success status code
     * @param {Response} response 
     */
    async verifyUpdatedStatusCode(response) {
        await expect(response.status()).toBe(200);
    }

    /**
     * Func to verify the API Schema with updated values
     * @param {Response} response 
     */
    async verifyUpdatedData(response, title, body) {
        let post = await response.json();
        await expect(post.body).toBe(body);
        await expect(post.title).toBe(title);
    }
} module.exports = { putPostsApi };