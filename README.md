## Inside that directory, you can run several commands:

  Runs the end-to-end tests.

    npx playwright test

  Starts the interactive UI mode.

    npx playwright test --ui

  Runs the tests only on Desktop Chrome.

    npx playwright test --project=chromium

  Runs the tests in a specific file.

    npx playwright test example

  Runs the tests in debug mode.

    npx playwright test --debug

  Auto generate tests with Codegen.

    npx playwright codegen

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭


# About .env

<b>Note</b> : By default .env file not able to read by using `process.env.ENVIRONMENT` step we need to need to load the `.env` file explicitly<br/>
- Install dotenv

      npm install dotenv --save-dev

- Create a .env file

      ENVIRONMENT=development
      STANDARD_TIMEOUT=5000

- Load the .env file

      import dotenv from 'dotenv';
      dotenv.config();
    
    or add in playwright.config.ts
      
      require('dotenv').config();

- Access environment variables

      console.log(process.env.ENVIRONMENT); // Output: development
      console.log(process.env.STANDARD_TIMEOUT); // Output: 5000

Ensure that you place the call to `dotenv.config()` at the very beginning of your script, before any references to `process.env`. This ensures that the environment variables are properly loaded into process.env before they are accessed elsewhere in your code.

# About  .editorconfig 
<b>Save the file:</b> Save the `.editorconfig` file in the root directory of your Playwright project.<br/>
Once you've added the `.editorconfig` file, your project should adhere to the formatting rules specified in the configuration file.<br/> Most modern code editors and IDEs support EditorConfig and will automatically apply the formatting rules when you open or save files within the project.<br/> This ensures consistency across the codebase, especially in collaborative environments where multiple developers might use different editors or IDEs.<br/>

Let's break down what each configuration directive means:

- `root = true`: Indicates that this .editorconfig file should be considered the root configuration file. It means that EditorConfig should stop looking for .editorconfig files in parent directories once it finds this one.

- `[*]`: Represents a wildcard pattern that applies settings to all files.

- `end_of_line = lf`: Specifies that the line endings should be LF (line feed). This setting is common in Unix and Unix-like systems.

- `insert_final_newline = true`: Ensures that an empty line is added at the end of the file. This is helpful because some tools or parsers may expect a newline at the end of the file.

- `trim_trailing_whitespace = true`: Indicates that any trailing whitespace at the end of lines should be removed automatically. This helps maintain cleaner code.

- `indent_style = space`: Specifies that indentation should use spaces rather than tabs.

- `indent_size = 2`: Sets the number of spaces for each indentation level to 2.

- `charset = utf-8`: Defines the character encoding of the file as UTF-8. This ensures that the file can properly handle Unicode characters.

In summary, this .editorconfig file establishes consistent formatting rules for all files in the project, ensuring that developers working with different editors or IDEs maintain a consistent coding style.