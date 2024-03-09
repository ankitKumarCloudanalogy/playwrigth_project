import { expect, Locator, Page, TestInfo } from '@playwright/test'
import { IBasePage } from './ibase-page'
import { Background } from '../../background'


export class BasePage implements IBasePage {
    readonly page: Page
    readonly standardTimeout: number = Background.STANDARD_TIMEOUT

    constructor(page: Page) {
        this.page = page
    }

    public async tryFindElement(selector: string) {
        return (await this.page.$(selector).catch(() => null)) !== null
    }

    public async clickButton(buttonText: string) {
        const buttonSelectors = [
            `//button[contains(text(), "${buttonText}")]`,
            `//span[contains(text(), "${buttonText}")]`,
            `//button[contains(., "${buttonText}")]`,
            `//*[contains(@aria-label, "${buttonText}")]`,
            `//*[contains(@aria-label, "${buttonText}")]/ancestor::button`,
            `//a[contains(text(), "${buttonText}")]`
        ]
        const buttonElement = this.page
            .locator(`(${buttonSelectors.join('|')}) >> visible=true`)
            .first()
        const loadingButton = this.page.locator('button[aria-label="loading spinner"]')

        await expect(buttonElement).toBeVisible({ timeout: this.standardTimeout })
        await expect(buttonElement).toBeEnabled()

        await buttonElement.click()

        await expect(loadingButton).not.toBeVisible({ timeout: this.standardTimeout })
    }

    public async clickLink(linkText: string) {
        const anchorSelectors = [
            `//a[contains(text(), "${linkText}")]`,
            `//*[contains(text(), "${linkText}")]/ancestor::a`
        ]
        const linkElement = this.page.locator(`(${anchorSelectors.join('|')}) >> visible=true`).first()

        await expect(linkElement).toBeVisible({ timeout: this.standardTimeout })
        await expect(linkElement).toBeEnabled()

        await linkElement.click()
    }

    public async confirmToast(notificationText: string) {
        const toastMessageSelector = this.page.locator('[role="alert"] span.font-normal')

        await expect(toastMessageSelector).toBeVisible({ timeout: this.standardTimeout })
        await expect(toastMessageSelector).toContainText(notificationText)
        await expect(toastMessageSelector).not.toBeVisible({ timeout: this.standardTimeout })
    }

    public async confirmTitle(titleText: string) {
        await expect(this.page).toHaveTitle(titleText, { timeout: this.standardTimeout })
    }

    async clearAndFillInput(input: Locator, value: string) {
        await expect(input).toBeVisible()
        await input.fill('')
        await input.type(value)
    }

    /**
     * Sleeps for a given number of milliseconds.
     * @param {number} ms
     */
    public async sleep(ms: number): Promise<void> {
        return this.page.waitForTimeout(ms)
    }
}
