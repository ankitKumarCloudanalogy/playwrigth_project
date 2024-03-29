import { defineConfig, devices } from '@playwright/test';
import os from 'os';
import path from 'path';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 // reporter: 'html',
  reporter: [
    ['./src/my-awesome-reporter.ts', { customOption: 'Ankit',Name: 'Kumar' }],
    ['list', { printSteps: true }],
    ['json', {  outputFile: 'reports/test-results.json' }],
    ['html'], //{ outputFolder: path.join('playwright-report', generateTimestamp()) }],
    ['junit', { outputFile: 'reports/results.xml' }],
    ['experimental-allure-playwright']
    //['blob', { outputDir: 'reports', fileName: `report-${os.platform()}.zip` }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'only-on-failure',  //Possible values: 'on', 'off', 'only-on-failure', 'retain-on-failure'
    trace: 'on-first-retry', //Possible values: 'on-all-retries', 'off', 'on', 'retain-on-failure', 'on-first-retry'
    video: 'on',  //Possible values: 'on-all-retries', 'off', 'on', 'retain-on-failure', 'on-first-retry'
    headless: process.env.HEADED === 'false',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

function generateTimestamp() {
  return new Date().toISOString().replace(/:/g, '_');
}
