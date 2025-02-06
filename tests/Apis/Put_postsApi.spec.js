// @ts-check
import { test, request } from '@playwright/test';
import { putPostsApi } from '../../APIs/put_PostsApi';
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));
const apiBodyData = JSON.parse(JSON.stringify(require("../../fixtures/apiBodyData.json")));
const userCredentials = JSON.parse(JSON.stringify(require("../../fixtures/userCredentials.json")));
let context, put_PostsApis, putEndpoint = pageUrls.ApiEndpoint.baseUrl + pageUrls.ApiEndpoint.getPosts + userCredentials.apiData.validPostID

test.beforeEach(async ({ }) => {
  context = await request.newContext();
  put_PostsApis = new putPostsApi(context);
});

test('Update post content by ID and verify changes', async () => {
  let putUpdateData = apiBodyData.putRequestBody
  //Execute put/posts call by body data
  const response = await put_PostsApis.putApiPosts(putEndpoint, putUpdateData);
  // Validate the response status code is 200 OK
  put_PostsApis.verifyUpdatedStatusCode(response);
  // Assert the data is updated correctly
  put_PostsApis.verifyUpdatedData(response, putUpdateData.title, putUpdateData.body);
})