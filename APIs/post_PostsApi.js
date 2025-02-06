const { log } = require("console");
import { expect } from '@playwright/test';

export class postPostsApi {
    constructor(context) {
        this.context = context;
    }

    /**
     * Func to call post method api with body data
     * @param {String} endpoint 
     * @param {JSON} postData 
     * @returns 
     */
    async postApiPosts(endpoint, postData) {
        const response = await this.context.post(endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: postData
        });
        return response
    }

    /**
     * Func to verify the created post status code
     * @param {Response} response 
     */
    async verifyCreatedStatusCode(response) {
        await expect(response.status()).toBe(201);
    }

    /**
     * Func to verify the API Schema newly created
     * @param {Response} response 
     */
    async verifyPostApiSchema(response, id, userId, title, body) {
        let post = await response.json();
        await expect(post.id).toBe(id);
        await expect(post.userId).toBe(userId);
        await expect(post.title).toBe(title);
        await expect(post.body).toBe(body);
    }
} module.exports = { postPostsApi };