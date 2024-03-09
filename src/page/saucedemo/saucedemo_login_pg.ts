import { Page, Locator, ElementHandle } from '@playwright/test';
import { BasePage } from '../../common/pages/base-page';
import { Background } from '../../background';

export class LoginPage extends BasePage {
  // Locators
  private readonly usernameInput: string = '[data-test="username"]';
  private readonly passwordInput: string = '[data-test="password"]';
  private readonly loginButton: string = '[data-test="login-button"]';
  private readonly errorMessage: string = '[data-test="error"]';

  async navigate() {
    var aa = Background.SD_BASE_URL
    await this.page.goto(Background.SD_BASE_URL);
  }

  async setUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async setPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    const errorElement: ElementHandle | null = await this.page.$(this.errorMessage);
    return errorElement ? await errorElement.innerText() : '';
  }

  async login(username: string, password: string) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickLoginButton();
  }
}
