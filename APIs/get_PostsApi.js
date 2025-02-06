const { log } = require("console");
import { expect } from '@playwright/test';

export class getPostsApi {
    constructor(context) {
        this.context = context;
    }

    /**
     * Func to call get method api
     * @param {String} endpoint 
     * @returns response object
     */
    async getPosts(endpoint) {
        const response = await this.context.get(endpoint)
        return response;
    }

    /**
     * Func to verify the success status code
     * @param {Response} response 
     */
    async verifySuccessStatusCode(response) {
        await expect(response.status()).toBe(200);
    }

    /**
     * Func to verify the unsuccessful status code
     * @param {Response} response 
     */
    async verifyUnsuccessStatusCode(response) {
        await expect(response.status()).toBe(404);
    }

    /**
     * Func to verify the API Schema
     * @param {Response} response 
     */
    async verifyApiSchema(response) {
        let posts = await response.json();
        await expect(Array.isArray(posts)).toBeTruthy();
        posts.forEach(post => {
            expect(post).toHaveProperty('userId');
            expect(post).toHaveProperty('id');
            expect(post).toHaveProperty('title');
            expect(post).toHaveProperty('body');
        });
    }

    /**
     * Func to verify the API Schema of given id
     * @param {Response, String} response, id
     */
    async verifyApiSchemaByID(response, id) {
        let post = await response.json();
        await expect(post).toHaveProperty('id', id);
        await expect(post.userId).toBe(id);
    }

    /**
     * Func to verify empty response body
     * @param {Response} response 
     */
    async verifyApiDataNotFound(response) {
        let post = await response.json();
        const body = await post.text();
        await expect(body).toBe('{}')
    }

} module.exports = { getPostsApi };