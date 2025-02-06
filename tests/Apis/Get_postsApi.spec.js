// @ts-check
import { test, request } from '@playwright/test';
import { getPostsApi } from '../../APIs/get_PostsApi';
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));
const userCredentials = JSON.parse(JSON.stringify(require("../../fixtures/userCredentials.json")));
let context, getPosts, getEndpoint = pageUrls.ApiEndpoint.baseUrl + pageUrls.ApiEndpoint.getPosts
test.beforeEach(async ({ }) => {
  context = await request.newContext();
  getPosts = new getPostsApi(context);
});

test('GET /posts should return a 200 OK status and correct structure of response', async () => {
  //Execute GET/posts call to fetch data
  const response = await getPosts.getPosts(getEndpoint);
  // Validate the response status code is 200 OK
  getPosts.verifySuccessStatusCode(response);
  // Assert the schema of each post in the array
  getPosts.verifyApiSchema(response);
})

test('GET /posts/{id} - Validate a successful response when a valid post ID is provided', async () => {
  //Execute GET /posts/{id} api to fetch data by ID
  const response = await getPosts.getPosts(getEndpoint + userCredentials.apiData.validPostID);
  // Validate the response status code is 200 OK
  getPosts.verifySuccessStatusCode(response);
  // Assert the schema of post 
  getPosts.verifyApiSchemaByID(response, userCredentials.apiData.validPostID);
})

test('GET /posts/{id} - Validate a unsuccessful response when a invalid post ID is provided', async () => {
  //Execute GET /posts/{id} api to fetch data by ID
  const response = await getPosts.getPosts(getEndpoint + userCredentials.apiData.invalidPostID);
  // Validate the response status code is 404
  getPosts.verifyUnsuccessStatusCode(response);
  // Assert that empty result for invalid id
  getPosts.verifyApiDataNotFound(response, userCredentials.apiData.validPostID);
})