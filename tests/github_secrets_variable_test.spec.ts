import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/page/saucedemo/saucedemo_login_pg';
import { Background } from '../src/background';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
  });

  test('should login successfully with github credentials', async () => {
    const environment = process.env.ENVIRONMENT;
    const baseUrl = process.env.SD_BASE_URL_GT
    const password = process.env.SD_PASSWORD_GT
    const username = process.env.SD_UASE_NAME_GT
    console.log('------------------------------Start Github Variables-------------')
    console.log('environment: '+environment)
    console.log('baseUrl: '+baseUrl)
    console.log('username: '+username)
    console.log('password: '+password)
    console.log('------------------------------END Github Variables---------------')

    console.log('------------------------------Start .env Variables-------------')
    console.log('environment: '+Background.ENVIRONMENT)
    console.log('baseUrl: '+Background.SD_BASE_URL)
    console.log('------------------------------END .env Variables---------------')
    await loginPage.navigateUrl(baseUrl);
    await loginPage.login(username, password);
  });
});
