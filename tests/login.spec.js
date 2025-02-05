// @ts-check
import { test, expect, request } from '@playwright/test';
import { POManager } from '../helper/POManager';

const userCredentials = JSON.parse(JSON.stringify(require("../fixtures/userCredentials.json")));
const pageUrls = JSON.parse(JSON.stringify(require("../fixtures/pageUrls.json")));

test('Validate successful login using the provided valid credentials', async ({ page }) => {
  const poManager = new POManager(page);
  //open web url
  const loginPage = poManager.getLoginPage();;
  await loginPage.openApp(pageUrls.webUrls.loginUrl);
  const securepage = poManager.getSecurePage();
  //login to app with valid credentials 
  await loginPage.loginToApplication(userCredentials.validUser.UserName, userCredentials.validUser.Password);
  const url = await securepage.getCurrentUrl();
  console.log(url);
  //verify user loggedin succesfully 
  expect(url).toBe(pageUrls.webUrls.successfulLoginUrl);
})