// @ts-check
import { test, expect, request } from '@playwright/test';
import { securePage } from '../pages/securePage.spec'
import { APIUser } from '../APIs/APIUser';
import { POManager } from '../helper/POManager';

const userCredentials = JSON.parse(JSON.stringify(require("../fixtures/userCredentials.json")));
const pageUrls = JSON.parse(JSON.stringify(require("../fixtures/pageUrls.json")));

test('Get API test', async () => {
  const context = await request.newContext();
  const util = new APIUser(context);
  let response = await util.getPosts();
})