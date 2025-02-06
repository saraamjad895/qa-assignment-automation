// @ts-check
import { test, expect } from '@playwright/test';
import { POManager } from '../../helper/POManager';
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));

test('Automate the process of starting the dynamic loading and verify the final message', async ({ page }) => {
  const poManager = new POManager(page);
  const commonLib = poManager.getCommonLib();
  const dynamicLoading = poManager.getDynamicLoadingPage();
  //open web url
  await commonLib.openApp(pageUrls.webUrls.dynamicLoadingUrl);
  //Automate the process of starting the dynamic loading
  dynamicLoading.startDynamicLoading();
  //Wait for the dynamically loaded element to appear 
  await dynamicLoading.waitForDynamicLoading();
  //Verify that the final message (“Hello World!”) is displayed.
  const actualText = await dynamicLoading.getFinalTextAfterLoading();
  await expect(actualText).toContain('Hello World!')
})