import { Locator } from '@playwright/test'

export interface IBasePage {
  clickButton(buttonText: string): Promise<void>
  clickLink(linkText: string): Promise<void>
  confirmTitle(titleText: string): Promise<void>
  clearAndFillInput(input: Locator, value: string): Promise<void>
}
