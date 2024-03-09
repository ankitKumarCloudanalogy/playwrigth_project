import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/page/saucedemo/saucedemo_login_pg';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should display error message for invalid login', async () => {
    await loginPage.login('invalid', 'credentials');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match any user');
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    // Add assertion for successful login, e.g., check for page redirection, presence of logged-in user, etc.
  });
});
