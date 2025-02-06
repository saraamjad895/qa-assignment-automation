// @ts-check
import { test, expect } from '@playwright/test';
import { POManager } from '../../helper/POManager';
const pageUrls = JSON.parse(JSON.stringify(require("../../fixtures/pageUrls.json")));

test('Automate the file upload file process and verify the success message', async ({ page }) => {
  const poManager = new POManager(page);
  const commonLib = poManager.getCommonLib();
  const fileUploadPage = poManager.getFileUploadPage();
  //open web url
  await commonLib.openApp(pageUrls.webUrls.fileUploadUrl);
  //Click on choose file and select the file
  await fileUploadPage.clickChooseFileBtn(pageUrls.filePathUrl.filePath);
  //Click on upload button
  await fileUploadPage.clickUploadBtn();
  //Verify that the file upload success message
  const actualText = await fileUploadPage.getSuccessFileUploadMsg();
  await expect(actualText).toBe('File Uploaded!')
})