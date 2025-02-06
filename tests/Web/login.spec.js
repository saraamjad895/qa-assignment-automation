// @ts-check
import { test, expect } from '@playwright/test';
import { POManager } from '../../helper/POManager';
const userCredentials = JSON.parse(JSON.stringify(require("../../fixtures/userCredentials.json")));
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));
let poManager, common, loginPage, securepage
test.beforeEach(async ({ page }) => {
  poManager = new POManager(page);
  common = poManager.getCommonLib();
  loginPage = poManager.getLoginPage();
  securepage = poManager.getSecurePage();
});

test('Validate successful login using the provided valid credentials', async ({ }) => {
  //open web url
  await common.openApp(pageUrls.webUrls.loginUrl);
  //login to app with valid credentials 
  await loginPage.loginToApplication(userCredentials.validUser.UserName, userCredentials.validUser.Password);
  const url = await securepage.getCurrentUrl();
  //verify user loggedin succesfully 
  await expect(url).toBe(pageUrls.webUrls.successfulLoginUrl);
})

test('Validate that incorrect credentials produce an appropriate error message', async ({ }) => {
  //open web url
  await common.openApp(pageUrls.webUrls.loginUrl);
  //login to app with invalid credentials 
  await loginPage.loginToApplication(userCredentials.invalidUser.UserName, userCredentials.invalidUser.Password);
  //Get and verify error message
  let errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toContain('Your username is invalid!');
})

