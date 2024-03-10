import { test, expect } from '@playwright/test';
import { Screenshots } from '../src/screenshots';

test('Loging and reporting', async ({ page },testInfo) => {
  const screen = new Screenshots()
  await page.goto('https://www.saucedemo.com/');
  await screen.captureScreenshot(page,'screenshots/example.png')
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await screen.captureFullPageScreenshot(page,"screenshots/fullexample.png")
  await screen.captureElementScreenshotBySelector(page,'[data-test="login-button"]','screenshots/elementexample.png')
  await page.locator('[data-test="login-button"]').click();
  const base64String = await screen.captureScreenshotAsBase64(page)
  //console.log(base64String);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
  await page.locator('[data-test="checkout"]').click();
  const screenshotBuffer2 = await screen.takeScreenshots(page, {
        fullPage: true,
        path: 'screenshots/example-fullpage.png',
        type: 'png',
        //quality: 80,
        timeout: 5000 // 5 seconds timeout
        // Add more options as needed
    });
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Ankit Kumar');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  await testInfo.attach('Name', { body: 'Ankit Kumar Singh', contentType: 'text/plain' })
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Singh');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('824102');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});