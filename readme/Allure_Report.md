## Allure Reports with Playwright

Step by Step Guide to Integrate and Generate Allure Report with Playwright
Pre-Requisite:

We are assuming, you already have some tests in your framework
- Step 1: Install allure command line

To open the allure report, you need to have allure dependency need to be installed on your machine.

```npm i -D allure-commandline```

- Step 2: Install allure for playwright

```npm i -D experimental-allure-playwright```

- Step 3: Configure Playwright global Config file

We are specifying reporter in the playwright configuration file. If you don’t want to specify reporter type in the configuration file you can mention it in the command line as well. we will show both the option here.

Configuration for Allure Reports, Copy and Paste the below code into your playwright.config.ts file. This file should be located in your Project Root Folder

```
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    screenshot: 'only-on-failure'
  },
  reporter: 'experimental-allure-playwright',
};
export default config;
```

## Execute Playwright Tests with reporter option

Note: Follow this option only if you have skipped Step 3 i.e If you have not configured the playwright global config file

Execute Test with playwright reporter option using below command

```npx playwright test --reporter=line,experimental-allure-playwright```

- Step 5: Generate allure report for Playwright

Using the command line you can generate the allure report.

Generate allure report in Playwright using below command

```npx allure generate ./allure-results --clean```


- Step 6: Open Playwright Allure Test Report using command prompt

Allure has generated a detailed report for you, if you want to see the beautiful report you need to open the allure report with the below command

```npx allure open ./allure-report```


Link: https://medium.com/geekculture/how-to-generate-html-report-in-playwright-f9ec9b82427a

DOC: https://allurereport.org/docs/playwright/