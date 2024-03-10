
import { Page, PageScreenshotOptions,LocatorScreenshotOptions,Locator, TestInfo } from '@playwright/test';

export class Screenshots {

    /**
     * Captures a screenshot of the current page.
     * @param page - The Playwright page object.
     * @param path - The path where the screenshot should be saved.
     */
    public async captureScreenshot(page: any, path: string): Promise < void> {
        try {
            await page.screenshot({ path });
            console.log(`Screenshot saved to ${path}`);
        } catch(error) {
            console.error(`Error capturing screenshot: ${error}`);
        }
    }

    /**
     * Captures a full-page screenshot of the current page.
     * @param page - The Playwright page object.
     * @param path - The path where the full-page screenshot should be saved.
     */
    public async captureFullPageScreenshot(page: any, path: string): Promise < void> {
        try {
            await page.screenshot({ path, fullPage: true });
            console.log(`Full page screenshot saved to ${path}`);
        } catch(error) {
            console.error(`Error capturing full page screenshot: ${error}`);
        }
    }

    /**
     * Captures a screenshot of the current page and returns it as a base64 encoded string.
     * @param page - The Playwright page object.
     * @returns A base64 encoded string representing the screenshot, or null if capture fails.
     */
    public async captureScreenshotAsBase64(page: any): Promise < string | null > {
        try {
            const buffer = await page.screenshot();
            if(buffer) {
                return buffer.toString('base64');
            }
            return null;
        } catch(error) {
            console.error(`Error capturing screenshot: ${error}`);
            return null;
        }
    }

    /**
     * Captures a screenshot of a specific element on the page identified by the given selector.
     * @param page - The Playwright page object.
     * @param selector - The CSS selector identifying the element to capture.
     * @param path - The path where the element screenshot should be saved.
     */
    public async captureElementScreenshotBySelector(page: any, selector: string, path: string): Promise < void> {
        try {
            const locator = page.locator(selector);
            await locator.screenshot({ path });
            console.log(`Element screenshot saved to ${path}`);
        } catch(error) {
            console.error(`Error capturing element screenshot: ${error}`);
        }
    }

    /**
     * Takes screenshots of the page.
     * @param page The Playwright page object.
     * @param options Options for taking the screenshot.
     * * Available options:
     * - fullPage: (boolean) When set to true, takes a screenshot of the entire scrollable page, including areas not visible in the viewport.
     * - clip: (Object) Defines a rectangular region of the page to capture, specified by its x, y coordinates (top-left corner) and its width and height.
     * - path: (string) The file path to save the image to. The screenshot type will be inferred from the file extension. If not provided, the screenshot won't be saved to disk.
     * - type: ("png" | "jpeg") Specifies the screenshot type. Defaults to "png" if not provided.
     * - omitBackground: (boolean) When set to true, hides the default white background and allows capturing screenshots with transparency. Not applicable to JPEG images.
     * - quality: (number) The quality of the image, applicable only to JPEG screenshots. It should be a number between 0 and 100.
     * - timeout: (number) Maximum time in milliseconds to wait for the screenshot to be taken. Defaults to 0 (no timeout).
     * - scale: ("css" | "device") Specifies the scale of the screenshot. When set to "css", the screenshot will have a single pixel per CSS pixel on the page. When set to "device", it will produce a single pixel per device pixel.
     * - clip: (Object) An object specifying clipping of the resulting image, defined by x, y, width, and height properties.
     * - omitBackground: (boolean) Hides the default white background and allows capturing screenshots with transparency. Not applicable to JPEG images.
     * @returns Promise resolving to a Buffer containing the captured screenshot.
     */
    public async takeScreenshots(page: Page, options?: PageScreenshotOptions): Promise<Buffer> {
        return await page.screenshot(options);
    }
    /**
     * Takes a screenshot of a specific element on the page identified by a locator.
     * @param locator The Playwright locator object representing the element to capture.
     * @param options Options for taking the screenshot.
     *  * Available options:
        * - path: (string) The file path to save the image to. The screenshot type will be inferred from the file extension. If not provided, the screenshot won't be saved to disk.
        * - type: ("png" | "jpeg") Specifies the screenshot type. Defaults to "png" if not provided.
        * - omitBackground: (boolean) When set to true, hides the default white background and allows capturing screenshots with transparency. Not applicable to JPEG images.
        * - quality: (number) The quality of the image, applicable only to JPEG screenshots. It should be a number between 0 and 100.
        * - timeout: (number) Maximum time in milliseconds to wait for the screenshot to be taken. Defaults to 0 (no timeout).
        * - padding: (Object) An object specifying padding around the element before taking the screenshot. It can have top, bottom, left, and right properties, each specifying the padding in pixels.
     * @returns Promise resolving to a Buffer containing the captured screenshot.
     */
    public async  takeLocatorScreenshot(locator: Locator, options?: LocatorScreenshotOptions): Promise<Buffer> {
        return await locator.screenshot(options);
    }

    public async  takeAndAttachScreenshot(testInfo: TestInfo, page: Page, name: string) {
        const screenshotPath = `./${name}.png`;
        await page.screenshot({ path: screenshotPath });
        await testInfo.attach(screenshotPath, { body: `${name} screenshot` });
    }

}