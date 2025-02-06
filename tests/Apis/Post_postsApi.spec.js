// @ts-check
import { test, request } from '@playwright/test';
import { postPostsApi } from '../../APIs/post_PostsApi';
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));
const apiBodyData = JSON.parse(JSON.stringify(require("../../fixtures/apiBodyData.json")));
let context, post_PostsApis, postEndpoint = pageUrls.ApiEndpoint.baseUrl + pageUrls.ApiEndpoint.getPosts

test.beforeEach(async ({ }) => {
  context = await request.newContext();
  post_PostsApis = new postPostsApi(context);
});

test('Create a new post and validate response', async () => {
  let postData = apiBodyData.postRequestBody
  //Execute post/posts call by body
  const response = await post_PostsApis.postApiPosts(postEndpoint, postData);
  // Validate the response status code is 201 OK
  post_PostsApis.verifyCreatedStatusCode(response);
  // Assert the data is created with ID
  post_PostsApis.verifyPostApiSchema(response, postData.id, postData.userId, postData.title, postData.body);
})