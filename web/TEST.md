# Testing Guide

This document provides instructions on how to run unit tests (using Jest) and end-to-end tests (using Cypress) in the `revolutionary_farmers/web` project. It also includes prerequisites and tips to ensure the tests run successfully.

## Prerequisites

Before running any tests, make sure the following prerequisites are met:

### Node.js & PNPM Installed:

- Install Node.js version 18 (recommended).
- Install PNPM globally:

```shellscript
npm install -g pnpm
```


### Dependencies Installed:

Navigate to the web directory and install dependencies:

```shellscript
cd web
pnpm install
```

### Environment Variables:

Ensure all necessary environment variables are properly set up. If a `.env` file is required, it should exist in the web directory.

### Development Server:

Ensure the development server can start without errors:

```shellscript
pnpm start
```

## Running Unit Tests with Jest

### Command

```shellscript
pnpm test
```

### Options

- Run tests in watch mode:

```shellscript
pnpm test:watch
```


- Generate a coverage report:

```shellscript
pnpm test:coverage
```


### Configuration

Jest is preconfigured in the project. Ensure the following:

- The `jest.config.js` file exists in the web directory.
- Dependencies like `jest`, `@testing-library/react`, and `@testing-library/jest-dom` are installed.


## Running End-to-End Tests with Cypress

### Commands

- Run Cypress in the terminal (headless mode):

```shellscript
pnpm test:e2e
```


- Open Cypress GUI:

```shellscript
pnpm test:e2e:open
```


- Run Cypress tests in CI mode:

```shellscript
pnpm test:e2e:ci
```


### Configuration

Cypress is preconfigured in the project. Ensure the following:

- The `cypress.config.js` file exists in the web directory.
- Cypress dependencies like `cypress` and `start-server-and-test` are installed.
- Tests are located in the `cypress/e2e` directory.


### Development Server Requirement

Cypress tests require the development server to be running. The `test:e2e:ci` script handles this automatically using `start-server-and-test`. If running tests manually, ensure the server is started:

```shellscript
pnpm start
```

## Best Practices to Ensure Successful Test Runs

### Clean Dependencies:

If tests fail due to dependency issues, try clearing and reinstalling dependencies:

```shellscript
pnpm install --frozen-lockfile
```

### Lint and Format Code:

Ensure the code passes linting and formatting checks before running tests:

```shellscript
pnpm lint
pnpm prettier --check "src/**/*.{js,jsx,ts,tsx,json,css,md}"
```

### Check Network and Ports:

Ensure the development server port ([http://localhost:3000](http://localhost:3000)) is not occupied by another process.

### Ensure Test Data is Correct:

For Cypress tests, ensure the backend and database (if applicable) are correctly set up and populated with test data.

### Debugging Tips:

- For Jest: Add `--verbose` to the `pnpm test` command for detailed logs.
- For Cypress: Use the GUI (`pnpm test:e2e:open`) to debug test flows visually.