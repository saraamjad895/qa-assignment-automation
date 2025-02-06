// @ts-check
import { test, request } from '@playwright/test';
import { APIUser } from '../APIs/APIUser';

const userCredentials = JSON.parse(JSON.stringify(require("../fixtures/userCredentials.json")));
const pageUrls = JSON.parse(JSON.stringify(require("../fixtures/pageUrls.json")));

test('Get API test', async () => {
  const context = await request.newContext();
  const util = new APIUser(context);
  let response = await util.getPosts();
})