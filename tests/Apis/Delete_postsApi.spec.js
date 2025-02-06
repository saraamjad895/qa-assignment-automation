// @ts-check
import { test, request } from '@playwright/test';
import { deletePostsApi } from '../../APIs/delete_PostsApi';
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));
const userCredentials = JSON.parse(JSON.stringify(require("../../fixtures/userCredentials.json")));
let context, delete_PostsApis, deleteEndpoint = pageUrls.ApiEndpoint.baseUrl + pageUrls.ApiEndpoint.getPosts + userCredentials.apiData.deletePostID

test.beforeEach(async ({ }) => {
  context = await request.newContext();
  delete_PostsApis = new deletePostsApi(context);
});

test('Delete a post and ensure that the endpoint returns the appropriate status code (200 or 204)', async () => {
  //Execute the Delete call to remove post by id
  const response = await delete_PostsApis.deleteApiPosts(deleteEndpoint);
  // Validate the response status code is 200 OK or 204
  delete_PostsApis.verifyDeleteStatusCode(response);
  // Assert that GET call returns a 404 Not Found [jsonplaceholder does not simulate actual deletion]
  const getResponse = await delete_PostsApis.verifyDeletePostId(deleteEndpoint);
})